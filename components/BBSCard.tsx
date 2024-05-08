import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

function BBSCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit debitis temporibus
        eius, at reiciendis voluptas recusandae quos illum ratione, sit consectetur eum corrupti?
        Similique atque pariatur accusamus cumque doloremque!
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link className="text-blue-500" href={'/bbs-posts/1'}>
          Read More
        </Link>
      </CardFooter>
    </Card>
  )
}

export default BBSCard
