import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getPopularMovies } from '../services/api';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies()
      .then((res) => setMovies(res.data.results))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={movies}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Details', { id: item.id })}
          />
        )}
      />
    </View>
  );
}
