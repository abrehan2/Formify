// Imports:
import Logo from '@/components/specific/logo';
import ThemeSwitcher from '@/components/specific/theme-switcher';
import { TChildren } from '@/types/general';

export default function DashboardLayout({ children }: TChildren) {
  return (
    <div className="flex flex-col min-h-screen min-w-full max-h-screen">
      <nav className="flex justify-between items-center border-b  border-border h-[60px] px-8 py-2">
        <Logo />
        <ThemeSwitcher />
      </nav>
      <main className="flex w-full flex-grow px-8">{children}</main>
    </div>
  );
}
