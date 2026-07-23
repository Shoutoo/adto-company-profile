# ╔══════════════════════════════════════════════════════════════╗
# ║  Stage 1: Dependencies — install composer packages           ║
# ╚══════════════════════════════════════════════════════════════╝
FROM php:8.4-fpm-alpine AS build

WORKDIR /var/www/html

# Install system dependencies
RUN apk add --no-cache \
    git curl libpng-dev libxml2-dev zip unzip oniguruma-dev \
    icu-dev freetype-dev libjpeg-turbo-dev libzip-dev \
    autoconf g++ make linux-headers

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install \
        pdo_mysql mbstring exif pcntl bcmath gd \
        zip intl opcache sockets

# Install Redis extension
RUN pecl install redis && docker-php-ext-enable redis

# Install Composer
COPY --from=composer:2.8 /usr/bin/composer /usr/bin/composer

# Copy application code
COPY . .

# Install production dependencies
RUN composer install --no-interaction --no-dev --optimize-autoloader --no-scripts

# ╔══════════════════════════════════════════════════════════════╗
# ║  Stage 2: Runtime — lean production image                    ║
# ╚══════════════════════════════════════════════════════════════╝
FROM php:8.4-fpm-alpine AS runtime

WORKDIR /var/www/html

# Runtime system dependencies only
RUN apk add --no-cache \
    libpng libxml2 oniguruma icu freetype libjpeg-turbo libzip curl

# Copy compiled PHP extensions from build
COPY --from=build /usr/local/lib/php/extensions /usr/local/lib/php/extensions
COPY --from=build /usr/local/etc/php/conf.d /usr/local/etc/php/conf.d

# Copy composer binary
COPY --from=build /usr/bin/composer /usr/bin/composer

# Copy application from build
COPY --from=build /var/www/html /var/www/html

# Write PHP configuration inline (avoids path issues with build context)
RUN echo '[PHP]' > /usr/local/etc/php/conf.d/app.ini \
    && echo 'memory_limit = 512M' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'upload_max_filesize = 100M' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'post_max_size = 100M' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'max_execution_time = 300' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'max_input_vars = 3000' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'date.timezone = Asia/Jakarta' >> /usr/local/etc/php/conf.d/app.ini \
    && echo '[opcache]' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'opcache.enable = 1' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'opcache.validate_timestamps = 0' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'opcache.memory_consumption = 128' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'opcache.interned_strings_buffer = 16' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'opcache.max_accelerated_files = 10000' >> /usr/local/etc/php/conf.d/app.ini

# Write PHP-FPM pool configuration
RUN echo '[www]' > /usr/local/etc/php-fpm.d/www.conf \
    && echo 'user = www-data' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'group = www-data' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'listen = 0.0.0.0:9000' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'pm = dynamic' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'pm.max_children = 20' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'pm.start_servers = 5' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'pm.min_spare_servers = 2' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'pm.max_spare_servers = 10' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'pm.max_requests = 500' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'catch_workers_output = yes' >> /usr/local/etc/php-fpm.d/www.conf \
    && echo 'php_admin_value[error_log] = /var/log/php-fpm.log' >> /usr/local/etc/php-fpm.d/www.conf

# Set storage permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD php-fpm -t || exit 1

EXPOSE 9000
CMD ["php-fpm", "--nodaemonize"]
