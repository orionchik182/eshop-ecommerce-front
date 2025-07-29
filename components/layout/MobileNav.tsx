"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // Иконка бургера
import styles from "../layout/Header.module.scss";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Путь до вашего файла с DropdownMenu
import { Button } from "@/components/ui/button"; // Предполагаем, что у вас есть компонент Button от shadcn

// Определим тип для ссылок для удобства
type NavLink = {
  href: string;
  label: string;
};

// Компонент принимает массив ссылок как пропс
export default function MobileNav({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-white text-white hover:bg-white/20"
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Открыть меню</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={styles.mobileDropdownContent}>
        {navLinks.map((link) => (
          <DropdownMenuItem
            key={link.href}
            asChild
            className={styles.mobileDropdownItem}
          >
            <Link href={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
