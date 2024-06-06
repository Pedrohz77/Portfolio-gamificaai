import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logoVertical from "./images/logo-vertical.png";
import Logogamificacao from "./images/logogamificacao.png";

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo), 
  logoVertical: new ImageSource(logoVertical),
  Logogamificacao: new ImageSource(Logogamificacao)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
