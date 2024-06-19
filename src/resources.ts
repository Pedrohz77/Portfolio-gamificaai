import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";

import sword from "./images/sword.png";
import logo from "./images/logo.png"
import logoVertical from "./images/logo-vertical.png"
import Logogamificacao from "./images/logogamificacao.png";
import Escolagamificacao from "./images/Escola.png";
import EmpresalixoGamificacao from "./images/EmpresaLixo.png"
import EmpresaPapelaoGamificacao from "./images/EmpresaPapelao.png"

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_paredes.tsx?url"
import tsxGenericPath from "./maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./maps/tileset_biblioteca.tsx?url"

import tmxMapaPath from "./maps/showroom_map.tmx?url"

import playerSpritePath from "./sprites/Player.png"
import npcASpritePath from "./sprites/NpcA.png"
import npcBSpritePath from "./sprites/NpcB.png"
import npcCSpritePath from "./sprites/NpcC.png"

import ritmada from "./sounds/ritmada_zelda.mp3"
import classico from "./sounds/zelda.mp3"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo), 
  PlayerSpritSheet: new ImageSource(playerSpritePath, { filtering: ImageFiltering.Pixel}),
  logoVertical: new ImageSource(logoVertical),
  Logogamificacao: new ImageSource(Logogamificacao),
  Escolagamificacao: new ImageSource(Escolagamificacao),
  EmpresalixoGamificacao: new ImageSource(EmpresalixoGamificacao),
  EmpresaPapelaoGamificacao: new ImageSource(EmpresaPapelaoGamificacao),
  RitmadaBGM: new Sound(ritmada),
  ClassicBGM: new Sound(classico),
  NpcASpritePath: new ImageSource(npcASpritePath, { filtering: ImageFiltering.Pixel}),
  NpcBSpritePath: new ImageSource(npcBSpritePath, { filtering: ImageFiltering.Pixel}),
  NpcCSpritePath: new ImageSource(npcCSpritePath, { filtering: ImageFiltering.Pixel}),

  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      { path: "showroom_map.tmx", output: tmxMapaPath },
      { path: "Room_builder_32x32.png", output: pngTilesetPath },
      { path: "tileset_paredes.tsx", output: tsxParedesPath },
      { path: "tileset_generic.tsx", output: tsxGenericPath },
      { path: "tileset_estoque.tsx?", output: tsxEstoquePath },
      { path: "tileset_biliotecaPath.tsx", output: tsxBibliotecaPath },
    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}