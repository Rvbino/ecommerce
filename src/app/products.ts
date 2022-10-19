export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {
        id:1,
        name: "Nintendo Switch",
        price: 299.99,
        description: "Peso circa 297 g (398 g con i Joy-Con collegati). Schermo  touch-screen capacitivo, 6,2 pollici LCD, risoluzione 1280 X 720 pixel. CPU/GPU  processore NVIDIA Tegra. Memoria  32 GB di memoria interna, dei quali 6,2 GB dedicati al sistema operativo."
    },

    {
        id:2,
        name: "XBOX series X",
        price: 499.99,
        description: "processore Zen 2 di AMD con 8 core a una frequenza variabile limitata a 3,5 GHz. La GPU è un sistema su chip (SoC) personalizzato, basato su RDNA 2 di AMD, con 36 unità di calcolo funzionanti a frequenza variabile, limitato a 2,23 GHz e capace di 12 TFLOPS."
    },

    {
        id:3,
        name: "Play Station 5",
        price: 759.99,
        description: "processore Zen 2 di AMD con 8 core a una frequenza variabile limitata a 3,5 GHz. La GPU è un sistema su chip (SoC) personalizzato, basato su RDNA 2 di AMD, con 36 unità di calcolo funzionanti a frequenza variabile, limitato a 2,23 GHz e capace di 10,28 TFLOPS."
    }
]

/*<div *ngFor="let product of products">
<h3>
  <a
    [title]="product.name + ' details'"
    [routerLink]="['/products', product.id]">
    {{ product.name }}
  </a>
</h3>
</div>*/