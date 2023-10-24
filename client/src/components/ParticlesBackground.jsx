import { useCallback } from "react"
import { loadSlim } from "tsparticles-slim"
import Particles from "react-tsparticles"
import particlesConfig from "./config/particles-config"

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, [])

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);

    }, [])
    return (
        <div id="particle-background">
            <Particles
                id="tsparticles"
                particlesLoaded="particlesLoaded"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConfig}
            />
        </div>
    )
}

export default ParticlesBackground