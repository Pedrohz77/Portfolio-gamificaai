import { Actor, Animation, CollisionType, Color, Engine, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../resources";

export class Npc extends Actor {
    constructor(posicao: Vector, cor: Color, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            color: cor,
            collisionType: CollisionType.Fixed
        })
    } 

    onInitialize(engine: Engine<any>): void {
        // Configurar sprite do player
        // NPC A
        const NpcASpritePath = SpriteSheet.fromImageSource({
            image: Resources.NpcASpritePath,
            grid: {
                spriteWidth: 32,  // 16
                spriteHeight: 64, // 32
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0   //4  //8
                }
            }
        })

        let NpcA = NpcASpritePath.getSprite(3, 0)
        // imagePlayer.scale = vec(1.5, 1.5)

        this.graphics.add(NpcA)

        // Criar as animações
        const duracaoFrameAnimacao = 70

        const downIdle = new Animation({
            frames: [
                { graphic: NpcASpritePath.getSprite(18, 1)},
                { graphic: NpcASpritePath.getSprite(19, 1)},
                { graphic: NpcASpritePath.getSprite(20, 1)},
                { graphic: NpcASpritePath.getSprite(21, 1)},
                { graphic: NpcASpritePath.getSprite(22, 1)},
                { graphic: NpcASpritePath.getSprite(23, 1)}
            ], 
          frameDuration: duracaoFrameAnimacao,  
        })
        this.graphics.add("NpcA", downIdle)
        // his.graphics.use("down-idle")

        // Definir animação inicial do player
        this.graphics.use("down-idle")

        // Npc B
        const NpcBSpritePath = SpriteSheet.fromImageSource({
            image: Resources.NpcBSpritePath,
            grid: {
                spriteWidth: 32,  // 16
                spriteHeight: 64, // 32
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0   //4  //8
                }
            }
        })

        let NpcB = NpcBSpritePath.getSprite(3, 0)
        // imagePlayer.scale = vec(1.5, 1.5)

        this.graphics.add(NpcB)

        const downIdle1 = new Animation({
            frames: [
                { graphic: NpcBSpritePath.getSprite(18, 1)},
                { graphic: NpcBSpritePath.getSprite(19, 1)},
                { graphic: NpcBSpritePath.getSprite(20, 1)},
                { graphic: NpcBSpritePath.getSprite(21, 1)},
                { graphic: NpcBSpritePath.getSprite(22, 1)},
                { graphic: NpcBSpritePath.getSprite(23, 1)}
            ], 
          frameDuration: duracaoFrameAnimacao,  
        })
        this.graphics.add("NpcB", downIdle1)
        // his.graphics.use("down-idle")

        // Definir animação inicial do player
        this.graphics.use("down-idle")

        // Npc C
        const NpcCSpritePath = SpriteSheet.fromImageSource({
            image: Resources.NpcCSpritePath,
            grid: {
                spriteWidth: 32,  // 16
                spriteHeight: 64, // 32
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0   //4  //8
                }
            }
        })

        let NpcC = NpcCSpritePath.getSprite(3, 0)
        // imagePlayer.scale = vec(1.5, 1.5)

        this.graphics.add(NpcC)

        const downIdle2 = new Animation({
            frames: [
                { graphic: NpcCSpritePath.getSprite(18, 1)},
                { graphic: NpcCSpritePath.getSprite(19, 1)},
                { graphic: NpcCSpritePath.getSprite(20, 1)},
                { graphic: NpcCSpritePath.getSprite(21, 1)},
                { graphic: NpcCSpritePath.getSprite(22, 1)},
                { graphic: NpcCSpritePath.getSprite(23, 1)}
            ], 
          frameDuration: duracaoFrameAnimacao,  
        })
        this.graphics.add("NpcC", downIdle2)
        // his.graphics.use("down-idle")

        // Definir animação inicial do player
        this.graphics.use("down-idle")

        let spriteNPC = this.name 
     
        this.graphics.use(spriteNPC)
    }
}