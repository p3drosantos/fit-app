import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="Hyper App" width={160} height={20} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b border-solid py-5">
              <Avatar>
                <AvatarImage src="/logo.png" alt="Avatar" />
              </Avatar>

              <div>
                <p className="font-bold">Mateus Pasqueta</p>
                <p className="text-sm">Hyper-app@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-b border-solid py-5">
              <SheetClose asChild>
                <Button className="justify-start gap-2" asChild>
                  <Link href="/">
                    <HomeIcon size={18} /> Inicio{" "}
                  </Link>
                </Button>
              </SheetClose>
            </div>

            <div className="flex flex-col gap-4 py-5">
              <Button variant="ghost" className="justify-start gap-2">
                {" "}
                <LogOutIcon size={18} /> Sair da Conta{" "}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
