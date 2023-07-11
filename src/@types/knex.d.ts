// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'next/types/tables' {
  export interface tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
