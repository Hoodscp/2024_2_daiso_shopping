import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  // HSL 색상 모델을 사용하여 1000개의 색상 생성
  const buttons = Array.from({ length: 1000 }, (_, i) => {
    const hue = (i * 360) / 1000 // 더 부드러운 색상 전환을 위해 분모를 1000으로 변경
    const baseColor = `hsl(${hue}, 70%, 50%)`
    const hoverColor = `hsl(${hue}, 70%, 45%)`

    return (
      <Button
        key={i}
        className="p-1 text-white text-[10px]" // 버튼 크기를 더 작게 조정
        style={{
          backgroundColor: baseColor,
          ['&:hover' as string]: {
            backgroundColor: hoverColor,
          },
        }}
      >
        {i + 1}
      </Button>
    )
  })

  return <div className="flex flex-wrap gap-1 p-4">{buttons}</div> // gap 크기도 줄임
}
