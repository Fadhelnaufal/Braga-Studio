"use client"

import { useEffect } from "react"

export default function FlowbiteProvider() {
  useEffect(() => {
    import("flowbite")
  }, [])

  return null
}
