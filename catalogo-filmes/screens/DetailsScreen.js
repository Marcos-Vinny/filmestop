import { useEffect, useState } from 'react';
import { ScrollView, Image, Text, StyleSheet } from 'react-native';
import Loading from '../components/Loading';
import { getMovieDetails } from '../services/api';

export default function DetailsScreen({ route }) {
  const { id } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <Loading />;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text>Nota: {movie.vote_average}</Text>
      <Text>Lançamento: {movie.release_date}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  poster: { width: '100%', height: 400, borderRadius: 8 },
  title: { fontSize: 22, fontWeight: 'bold', marginVertical: 8 },
  overview: { fontSize: 14, marginBottom: 8 },
});
