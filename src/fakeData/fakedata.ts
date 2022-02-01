import Movie from '../types/Movie';

const movies: Movie[] = [
  {
    id: 0,
    name: 'Inception',
    description:
      'Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife.',
    releasedYear: 2010,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg',
  },
  {
    id: 1,
    name: 'Titanic',
    description:
      'Titanic is a 1997 American epic romance and disaster film directed, written, produced, and co-edited by James Cameron.',
    releasedYear: 1997,
    poster:
      'https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png',
  },
  {
    id: 2,
    name: 'Eternal Sunshine of the Spotless Mind',
    description:
      'Eternal Sunshine of the Spotless Mind is a 2004 American romantic science-fiction film written by Charlie Kaufman and directed by Michel Gondry.',
    releasedYear: 2004,
    poster:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlDad1DnSApJJ9OHQM9IazQ_goiHSRYibeIYk0xF5cURWL9vlm',
  },
];

export const getMovie = (id: number): Movie | undefined => {
  return movies.find((m) => m.id === id);
};

export default movies;
