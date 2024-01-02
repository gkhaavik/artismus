import data from '../public/database.json';

export type Artist = {
    id: string;
    name: string;
    image: string;
};

export type User = {
    id: string;
    username: string;
    email: string;
    image: string;
    uri: string;
    karma: number;
};
type Song = {
    id: string;
    title: string;
    duration: string;
    uri: string;
    albumId: string;
};

type Album = {
    id: string;
    artistId: string;
    title: string;
    albumArt: string;
    uri: string;
    songIds: string[];
}

type Database = {
    songs: Song[];
    albums: Album[];
    artists: Artist[];
    users: User[];
};

const loadDatabase = (): Database => {
    return data as unknown as Database;
};

export const database: Database = loadDatabase();

export const getArtistById = (id: string): Artist | undefined => {
    return database.artists.find(artist => artist.id === id);
};

export const getAlbumById = (id: string): Album | undefined => {
    return database.albums.find(album => album.id === id);
};

// Replace song's albumId with corresponding album and artist objects
export const songsWithAlbumAndArtist = database.songs.map(song => {
    const album = getAlbumById(song.albumId);
    if (!album) throw new Error(`Album with id ${song.albumId} not found for song ${song.id}`)
    const artist = getArtistById(album.artistId);
    return {
        ...song,
        album: { ...album, artist },
        artist
    };
});