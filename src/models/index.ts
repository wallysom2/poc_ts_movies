import { Genre } from "@prisma/client";
import { Movie } from "@prisma/client";

export type GenreInput = Omit<Genre, "id">;
export type MovieInput = Omit<Movie, "id">;