'use client'
import { FC, useEffect, useState } from 'react'
import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import { getTheme } from '@table-library/react-table-library/baseline'
import styles from './admin.module.scss'
const Page: FC = () => {
  useEffect(() => {
    if (localStorage) {
      const token = localStorage.getItem('admin_rme_token')
      if (token) {
        fetchData()
      }
    }
  }, [])
  const theme = useTheme(getTheme())

  const [data, setData] = useState<any[]>([])

  const fetchData = async () => {
    const token = localStorage.getItem('admin_rme_token')

    const request = await fetch('/api/admin/active', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const body = await request.json()

    setData(body)
  }

  const COLUMNS = [
    { label: 'Имя', renderCell: (item) => item.name },
    {
      label: 'Email',
      renderCell: (item) => item.email,
    },
    { label: 'Комментарий', renderCell: (item) => item.comment },
    {
      label: 'Создана',
      renderCell: (item) =>
        new Date(item.creationTimestamp).toLocaleDateString(),
    },
  ]
  return (
    <div className={styles.page}>
      <div className={styles.table}>
        <CompactTable columns={COLUMNS} data={{ nodes: data }} theme={theme} />
      </div>
    </div>
  )
}

export default Page
