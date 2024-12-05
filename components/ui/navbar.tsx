import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <nav className="w-full px-6 py-4 flex items-center justify-between border-b">
        <Link href="/" className="text-xl font-bold hover:text-gray-700">
          My Website
        </Link>

        <div className="space-x-4">
          <Button variant="default">로그인</Button>
          <Button variant="secondary">회원가입</Button>
          <Button variant="outline">문의하기</Button>
          <Button variant="ghost">더보기</Button>
          <Button variant="destructive">삭제</Button>
          <Button variant="link">링크</Button>
        </div>
      </nav>
    </div>
  )
}
