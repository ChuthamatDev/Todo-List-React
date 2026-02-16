import { motion } from 'framer-motion'
import heartPixel from '../assets/heart-pixel.png'

interface RetroHeartProps {
    className?: string
}

export const RetroHeart = ({ className = '' }: RetroHeartProps) => {
    return (
        <motion.div
            className={`inline-block filter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] ${className}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.img
                src={heartPixel}
                alt="Pixel Heart"
                className="w-12 h-12 object-contain"
                draggable="false"
                style={{
                    imageRendering: 'pixelated',
                }}
                animate={{
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
        </motion.div>
    )
}

export default RetroHeart
