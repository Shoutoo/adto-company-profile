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
      { label: 'company_profile', href: ROUTES.ABOUT, descriptionKey: 'desc_profile', image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80' },
      { label: 'vision_mission', href: `${ROUTES.ABOUT}#vision`, descriptionKey: 'desc_vision', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80' },
      { label: 'company_values', href: `${ROUTES.ABOUT}#values`, descriptionKey: 'desc_values', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80' },
      { label: 'why_choose_us', href: `${ROUTES.ABOUT}#why`, descriptionKey: 'desc_why', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80' },
      { label: 'organization', href: `${ROUTES.ABOUT}#org`, descriptionKey: 'desc_org', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80' },
      { label: 'our_team', href: `${ROUTES.ABOUT}#team`, descriptionKey: 'desc_team', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80' },
    ],
  },
  {
    label: 'services',
    href: ROUTES.SERVICES,
    children: [
      { label: 'all_services', href: ROUTES.SERVICES, descriptionKey: 'desc_all_services', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80' },
      { label: 'consulting', href: ROUTES.SERVICE_DETAIL('consulting'), descriptionKey: 'desc_consulting', image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?auto=format&fit=crop&q=80' },
      { label: 'engineering', href: ROUTES.SERVICE_DETAIL('engineering'), descriptionKey: 'desc_engineering', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80' },
      { label: 'operations', href: ROUTES.SERVICE_DETAIL('operations'), descriptionKey: 'desc_operations', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80' },
    ],
  },
  {
    label: 'projects',
    href: ROUTES.PROJECTS,
    children: [
      { label: 'featured_projects', href: `${ROUTES.PROJECTS}#featured`, descriptionKey: 'desc_featured', image: 'https://images.unsplash.com/photo-1541888081622-0d170a48a529?auto=format&fit=crop&q=80' },
      { label: 'all_projects', href: ROUTES.PROJECTS, descriptionKey: 'desc_all_projects', image: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&q=80' },
      { label: 'project_categories', href: `${ROUTES.PROJECTS}#categories`, descriptionKey: 'desc_project_categories', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
    ],
  },
  {
    label: 'career',
    href: ROUTES.CAREER,
    children: [
      { label: 'open_positions', href: `${ROUTES.CAREER}#positions`, descriptionKey: 'desc_positions', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80' },
      { label: 'recruitment_process', href: `${ROUTES.CAREER}#process`, descriptionKey: 'desc_process', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80' },
      { label: 'company_culture', href: `${ROUTES.CAREER}#culture`, descriptionKey: 'desc_culture', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80' },
      { label: 'benefits', href: `${ROUTES.CAREER}#benefits`, descriptionKey: 'desc_benefits', image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80' },
    ],
  },
  {
    label: 'blog',
    href: ROUTES.BLOG,
    children: [
      { label: 'latest_articles', href: ROUTES.BLOG, descriptionKey: 'desc_articles', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80' },
      { label: 'news', href: `/news`, descriptionKey: 'desc_news', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80' },
      { label: 'insights', href: `${ROUTES.BLOG}#insights`, descriptionKey: 'desc_insights', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80' },
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
