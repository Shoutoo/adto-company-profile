/**
 * Barrel export for all UI components.
 * @module components/ui
 */

// ── Form Controls ──────────────────────────────────────
export { Label } from './label';
export { Button, buttonVariants, type ButtonProps } from './button';
export { Input, type InputProps } from './input';
export { Textarea, type TextareaProps } from './textarea';
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from './select';
export { Checkbox } from './checkbox';
export { RadioGroup, RadioGroupItem } from './radio-group';
export { Switch } from './switch';

// ── Display ────────────────────────────────────────────
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';
export { Badge, badgeVariants, type BadgeProps } from './badge';
export { Avatar, AvatarImage, AvatarFallback } from './avatar';
export { Alert, AlertTitle, AlertDescription } from './alert';
export { Skeleton } from './skeleton';
export { Spinner, spinnerVariants, type SpinnerProps } from './spinner';
export { Progress } from './progress';
export { Separator } from './separator';

// ── Interactive ────────────────────────────────────────
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip';
export { Popover, PopoverTrigger, PopoverContent } from './popover';
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './breadcrumb';
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination';
export { ScrollArea, ScrollBar } from './scroll-area';

// ── Overlay ────────────────────────────────────────────
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './dialog';
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './sheet';
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './dropdown-menu';
export { toast } from './toast';
export { VisuallyHidden } from './visually-hidden';
