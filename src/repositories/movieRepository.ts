import prisma from "../config/database.js";

async function getMovies() {
    const movies = await prisma.movie.findMany({
        include: {
             Genre: true,
        }
    });
}

const movieRepository = {
    getMovies,
};

export default movieRepository;