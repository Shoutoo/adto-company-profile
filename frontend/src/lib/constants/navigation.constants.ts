/**
 * Navigation configuration constants.
 * @module lib/constants/navigation
 */

import {
  LayoutDashboard,
  Wrench,
  FolderKanban,
  FileText,
  Briefcase,
  MessageSquare,
  HelpCircle,
  Quote,
  Users,
  Building2,
  Images,
  Settings,
  UserCog,
  Globe,
  Palette,
} from 'lucide-react';

import { type NavItem, type SidebarNavGroup, type FooterColumn } from '@/types/navigation.types';

import { ROUTES, ADMIN_ROUTES } from './routes.constants';

/** Main public navigation items */
export const PUBLIC_NAV_ITEMS: NavItem[] = [
  { label: 'home', href: ROUTES.HOME },
  {
    label: 'about',
    href: ROUTES.ABOUT,
    children: [
      { label: 'company_profile', href: ROUTES.ABOUT },
      { label: 'vision_mission', href: `${ROUTES.ABOUT}#vision` },
      { label: 'company_values', href: `${ROUTES.ABOUT}#values` },
      { label: 'why_choose_us', href: `${ROUTES.ABOUT}#why` },
      { label: 'organization', href: `${ROUTES.ABOUT}#org` },
      { label: 'our_team', href: `${ROUTES.ABOUT}#team` },
    ],
  },
  {
    label: 'services',
    href: ROUTES.SERVICES,
    children: [
      { label: 'all_services', href: ROUTES.SERVICES },
      { label: 'consulting', href: ROUTES.SERVICE_DETAIL('consulting') },
      { label: 'engineering', href: ROUTES.SERVICE_DETAIL('engineering') },
      { label: 'operations', href: ROUTES.SERVICE_DETAIL('operations') },
    ],
  },
  {
    label: 'projects',
    href: ROUTES.PROJECTS,
    children: [
      { label: 'featured_projects', href: `${ROUTES.PROJECTS}#featured` },
      { label: 'all_projects', href: ROUTES.PROJECTS },
      { label: 'project_categories', href: `${ROUTES.PROJECTS}#categories` },
    ],
  },
  {
    label: 'career',
    href: ROUTES.CAREER,
    children: [
      { label: 'open_positions', href: `${ROUTES.CAREER}#positions` },
      { label: 'recruitment_process', href: `${ROUTES.CAREER}#process` },
      { label: 'company_culture', href: `${ROUTES.CAREER}#culture` },
      { label: 'benefits', href: `${ROUTES.CAREER}#benefits` },
    ],
  },
  {
    label: 'blog',
    href: ROUTES.BLOG,
    children: [
      { label: 'latest_articles', href: ROUTES.BLOG },
      { label: 'news', href: `/news` },
      { label: 'insights', href: `${ROUTES.BLOG}#insights` },
    ],
  },
  {
    label: 'contact',
    href: ROUTES.CONTACT,
    children: [
      { label: 'office_location', href: `${ROUTES.CONTACT}#location` },
      { label: 'contact_form', href: `${ROUTES.CONTACT}#form` },
      { label: 'faq', href: ROUTES.FAQ },
    ],
  },
];

/** Admin sidebar navigation groups */
export const ADMIN_NAV_GROUPS: SidebarNavGroup[] = [
  {
    title: 'Overview',
    items: [
      {
        label: 'Dashboard',
        href: ADMIN_ROUTES.DASHBOARD,
        icon: LayoutDashboard,
        permissions: ['dashboard.view'],
      },
    ],
  },
  {
    title: 'Content',
    items: [
      {
        label: 'Services',
        href: ADMIN_ROUTES.SERVICES,
        icon: Wrench,
        permissions: ['services.view'],
      },
      {
        label: 'Projects',
        href: ADMIN_ROUTES.PROJECTS,
        icon: FolderKanban,
        permissions: ['projects.view'],
      },
      {
        label: 'Blog',
        href: ADMIN_ROUTES.BLOG,
        icon: FileText,
        permissions: ['blog.view'],
      },
      {
        label: 'Career',
        href: ADMIN_ROUTES.CAREER,
        icon: Briefcase,
        permissions: ['career.view'],
      },
    ],
  },
  {
    title: 'Engagement',
    items: [
      {
        label: 'Messages',
        href: ADMIN_ROUTES.MESSAGES,
        icon: MessageSquare,
        permissions: ['messages.view'],
      },
      {
        label: 'Testimonials',
        href: ADMIN_ROUTES.TESTIMONIALS,
        icon: Quote,
        permissions: ['testimonials.view'],
      },
      {
        label: 'FAQ',
        href: '/admin/faq',
        icon: HelpCircle,
        permissions: ['faq.view'],
      },
    ],
  },
  {
    title: 'People & Assets',
    items: [
      {
        label: 'Team',
        href: ADMIN_ROUTES.TEAM,
        icon: Users,
        permissions: ['team.view'],
      },
      {
        label: 'Clients',
        href: ADMIN_ROUTES.CLIENTS,
        icon: Building2,
        permissions: ['clients.view'],
      },
      {
        label: 'Gallery',
        href: ADMIN_ROUTES.GALLERY,
        icon: Images,
        permissions: ['gallery.view'],
      },
    ],
  },
  {
    title: 'Administration',
    items: [
      {
        label: 'Users',
        href: ADMIN_ROUTES.USERS,
        icon: UserCog,
        permissions: ['users.view'],
      },
      {
        label: 'Settings',
        href: ADMIN_ROUTES.SETTINGS,
        icon: Settings,
        permissions: ['settings.view'],
        children: [
          {
            label: 'General',
            href: ADMIN_ROUTES.SETTINGS_GENERAL,
            icon: Settings,
            permissions: ['settings.view'],
          },
          {
            label: 'SEO',
            href: ADMIN_ROUTES.SETTINGS_SEO,
            icon: Globe,
            permissions: ['settings.view'],
          },
          {
            label: 'Appearance',
            href: ADMIN_ROUTES.SETTINGS_APPEARANCE,
            icon: Palette,
            permissions: ['settings.view'],
          },
        ],
      },
    ],
  },
];

/** Footer navigation columns */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: ROUTES.ABOUT },
      { label: 'Our Team', href: `${ROUTES.ABOUT}#team` },
      { label: 'Career', href: ROUTES.CAREER },
      { label: 'Contact', href: ROUTES.CONTACT },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', href: ROUTES.SERVICES },
      { label: 'Projects', href: ROUTES.PROJECTS },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: ROUTES.BLOG },
      { label: 'FAQ', href: ROUTES.FAQ },
      { label: 'Privacy Policy', href: ROUTES.PRIVACY_POLICY },
      { label: 'Terms of Service', href: ROUTES.TERMS_OF_SERVICE },
    ],
  },
];
