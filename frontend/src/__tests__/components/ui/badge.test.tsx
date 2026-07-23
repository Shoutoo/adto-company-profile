import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Badge } from '@/components/ui/badge';

describe('Badge component', () => {
  it('renders children', () => {
    render(<Badge>Published</Badge>);
    expect(screen.getByText('Published')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText('Default')).toHaveClass('bg-primary');
  });

  it('renders with success variant', () => {
    render(<Badge variant="success">Active</Badge>);
    expect(screen.getByText('Active')).toHaveClass('bg-emerald-100');
  });

  it('renders with warning variant', () => {
    render(<Badge variant="warning">Pending</Badge>);
    expect(screen.getByText('Pending')).toHaveClass('bg-amber-100');
  });

  it('renders with destructive variant', () => {
    render(<Badge variant="destructive">Error</Badge>);
    expect(screen.getByText('Error')).toHaveClass('bg-destructive');
  });

  it('accepts custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });
});
