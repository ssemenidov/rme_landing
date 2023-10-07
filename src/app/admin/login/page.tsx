'use client'
import { FC, useState } from 'react'
import styles from '@/components/ContactUs/ContactUs.module.scss'
import styless from './login.module.scss'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Page: FC = () => {
  const [name, setName] = useState('')
  const [password, setEmail] = useState('')

  const router = useRouter()

  return (
    <div className={styless.page}>
      <div className={styless.content}>
        <form
          className={styles.contact_form}
          onSubmit={async (e) => {
            e.preventDefault()

            const response = await fetch('/api/auth/login', {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              body: JSON.stringify({
                name,
                password,
              }),
            })

            const body = await response.json()

            console.log(body)
            if (response.ok) {
              localStorage.setItem('admin_rme_token', body.token)
              router.push('/admin')
            } else {
              toast.error('Произошла ошибка, попробуйте снова', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              })
            }
            console.log(response)
          }}
        >
          <input
            placeholder={'Логин'}
            className={styles.contact_form__input}
            name={'name'}
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
          />
          <input
            placeholder={'Пароль'}
            type={'password'}
            className={styles.contact_form__input}
            name={'email'}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          />
          <input
            type={'submit'}
            className={styles.contact_form__button}
            value={'Войти'}
          />
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Page
