<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    protected $dontFlash = ['current_password', 'password', 'password_confirmation'];

    public function register(): void
    {
        $this->renderable(function (Throwable $e, Request $request) {
            if ($request->is('api/*') || $request->expectsJson()) {
                return match (true) {
                    $e instanceof AuthenticationException => response()->json([
                        'success' => false, 'message' => 'Unauthenticated. Please login.',
                    ], 401),
                    $e instanceof ValidationException => response()->json([
                        'success' => false,
                        'message' => 'Validation failed.',
                        'errors' => $e->errors(),
                    ], 422),
                    $e instanceof ModelNotFoundException,
                    $e instanceof NotFoundHttpException => response()->json([
                        'success' => false, 'message' => 'Resource not found.',
                    ], 404),
                    default => response()->json([
                        'success' => false,
                        'message' => app()->isProduction() ? 'Server error.' : $e->getMessage(),
                    ], 500),
                };
            }
        });
    }
}
