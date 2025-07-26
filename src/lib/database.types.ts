export type Project = {
    id: string
    title: string
    slug: string
    image_url: string
    description: string
    tech: string[]
    created_at: string
    link_sourcecode: string
    video: string
    price: number
  }
  
  export type Database = {
    public: {
      Tables: {
        project: {
          Row: Project
          Insert: Partial<Project>
          Update: Partial<Project>
        }
      }
    }
  }
  