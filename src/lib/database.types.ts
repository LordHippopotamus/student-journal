export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admins: {
        Row: {
          id: string
        }
        Insert: {
          id?: string
        }
        Update: {
          id?: string
        }
        Relationships: []
      }
      groups: {
        Row: {
          end_year: number
          id: string
          name: string
          start_year: number
        }
        Insert: {
          end_year: number
          id?: string
          name: string
          start_year: number
        }
        Update: {
          end_year?: number
          id?: string
          name?: string
          start_year?: number
        }
        Relationships: []
      }
      lessons: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      periods: {
        Row: {
          date: string
          id: string
          lesson: string
          mark: string
          student: string
        }
        Insert: {
          date: string
          id?: string
          lesson: string
          mark: string
          student: string
        }
        Update: {
          date?: string
          id?: string
          lesson?: string
          mark?: string
          student?: string
        }
        Relationships: [
          {
            foreignKeyName: "periods_lesson_fkey"
            columns: ["lesson"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "periods_student_fkey"
            columns: ["student"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          }
        ]
      }
      students: {
        Row: {
          full_name: string
          group: string
          id: string
        }
        Insert: {
          full_name: string
          group: string
          id?: string
        }
        Update: {
          full_name?: string
          group?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "students_group_fkey"
            columns: ["group"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Row'];
