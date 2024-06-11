import { Color, DefaultLoader, Engine, Fade, FadeInOut, Resource, Scene, Transition, hasOnInitialize } from "excalibur";
import { Resources } from "../resources";

export class expoScene extends Scene {
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }


    onInitialize(engine: Engine<any>): void {
        // Carregar o mapa
        let tiledmap = Resources.Mapa

        // Adicionar o mapa na cena
        tiledmap.addToScene(this)
    }
}

