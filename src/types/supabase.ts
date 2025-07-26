export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          video: string | null;
          tech: string;
          sourcecode: string | null;
          slug: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          video?: string | null;
          tech: string;
          sourcecode?: string | null;
          slug: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          video?: string | null;
          tech?: string;
          sourcecode?: string | null;
          slug?: string;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
