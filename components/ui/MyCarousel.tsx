import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Определим тип для пропсов, чтобы было удобнее
type CarouselProps = {
  product: {
    title: string;
    images?: string[];
  };
};

export function MyCarousel({ product }: CarouselProps) {
  return (
    <Carousel
      className="w-full max-w-lg"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {/* 2. Используем product.images для цикла */}
        {product.images?.map((imgUrl, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                
                <CardContent className="relative flex aspect-square items-center justify-center p-0">
                  <Image
                    alt={`${product.title} - фото ${index + 1}`}
                    src={imgUrl}
                    fill
                    className="object-cover rounded-lg" // object-cover чтобы картинка не искажалась
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
