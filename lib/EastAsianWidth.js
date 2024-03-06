import {UnicodeTrie} from '@cto.af/unicode-trie';

export const version = '15.1.0';
export const inputFileDate = new Date('2023-07-28T23:34:08.000Z');
export const generatedDate = new Date('2024-03-06T05:33:23.864Z');
export const EastAsianWidth = UnicodeTrie.fromBase64(
  `AAAEAAAAAAC1AgAAH4sIACMA6GUCA+2aP0gfMRTHz59tqbUUuhQKHVpoKXRxKg4OCi6Ki6A4
   CC7iJE7iJCKIOCgKgrg5iLrpppujkzgoqJOgLuKgg+giCOI3mpN43P0u5y8vyXnvBx+Sy7+X
   vHtJXi6/5VIQrIJ1sAnC5yKFTDL7CqyPYnBksK1jcJaQd1Fh21fgVsbvQXV1EHwAX8A38AP8
   Bv9AHRDl/iNskHEbNEtZbZZkdkBOOF+7lXiUXuTtyng/4oOy7ECkzjCeR5W0cSU+hbioK+Kz
   ZWQxDGOWuP2ZYRiGYRiGYfLGvDxHLlg8o+uyQtAnfucMwzD2KHm4tzAM4/f9ZyXfaalYk/c4
   Gwg3Y9a18F5HRdzZbIEdD9bBz7VPTH9yQ1OQncWPQTBX9cQp4j9rXua34nkykhZlG/k1kB+2
   44JWD+QXem0p+J3pocd9E/fjj/+FKLiveKJpo+codwluMtr0QQ50cJdgA8G7+PT3kfRaPItx
   fkX4PaaO0MMvpIvwL8Lwfxt1iNfLdLFnN8q4SpNMa0HYDrrAtdLnHqVOp5QdPvfheSBhDCG3
   Gva/B4bQzp+Y/kV9oBGUGQMTYAbMp8h/Cz5gnhF2tVSqeoZ//CvyT8wAl+j20ZVeTJc18Y6S
   dONqNaMcf9a2KeyPUm9U9UyOr1xbunLK1afQgdqvuLJZ5k1SfQr7obbJNJ2k6c30euZSX7bn
   P4XNpNm2L/s/lSxf/J08+Fs+9cGVTkzKM9GWbdu1LcPlXM/LechF/22Mv9L20s4+NvRGka+r
   b518inHb9Glcz/vX6DyprA9+f5LtmfjWQLFe+PCth0L2a/wtV/uVi/nt8zt1eZ6hlG167afy
   F/P0Lnw+V5ne+2zu1S6/+Wf1l3X2X905aNr3cnlec+HfU+1/vq3xVOuyaf/c9JrxAKGklNHg
   SQAAH4sIACMA6GUCA4tW8lPSUYpUigUA0d8CLAkAAAA=`
);

/**
 * @type {Record<string, number>}
 */
export const names = Object.fromEntries(
  EastAsianWidth.values.map((v, i) => [v, i])
);
export const {values} = EastAsianWidth;
