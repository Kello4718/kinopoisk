export type Movie = {
    ageRating: number;
    alternativeName: string;
    backdrop: {
        url: string;
        previewUrl: string;
    };
    countries: {
        name: string;
    }[];
    description: string;
    enName: null;
    genres: {
        name: string;
    }[];
    id: number;
    isSeries: boolean;
    logo: {
        url: string;
    };
    movieLength: number;
    name: string;
    names: {
        name: string;
        language: string;
        type: string | null;
    }[];
    poster: {
        previewUrl: string;
        url: string;
    };
    rating: {
        kp: number;
        imdb: number;
        filmCritics: number;
        russianFilmCritics: number;
        await: null;
    };
    ratingMpaa: string;
    seriesLength: null;
    shortDescription: string;
    status: null;
    ticketsOnSale: boolean;
    top10: number | null;
    top250: number | null;
    totalSeriesLength: null;
    type: string;
    typeNumber: number;
    votes: {
        await: number;
        filmCritics: number;
        imdb: number;
        kp: number;
        russianFilmCritics: number;
    };
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
    year: number;
};

export type KinopoiskData = {
    docs: Movie[];
    // limit: number;
    // page: number;
    // pages: number;
    // total: number;
};
