import { Color, DefaultLoader, Engine, Fade, FadeInOut, Resource, Scene, Transition, hasOnInitialize, vec } from "excalibur";
import { Resources } from "../resources";
import { player } from "../actors/player";

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

        // Definir offset para renderização do mapa
        let offsetX = 138
        let offsetY = 100

        // Adicionar o mapa na cena
        tiledmap.addToScene(this, {
            pos: vec(offsetX, offsetY)
        })

        // Definir zoom da camera para aumentar um pouco a visualização
        this.camera.zoom = 1.4

        // Criação e configuração do Player
        let jogador = new player()

        // Define z-index do player, útil se algum outro elemento ficar "por cima" do jogador
        jogador.z = 1

        // Adicionar o player na cena
        this.add(jogador)
    }
}

