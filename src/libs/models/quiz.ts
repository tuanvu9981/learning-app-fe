import { QuizType } from "../enum/quiz";

class QuizPartContent {
    constructor(
        private readonly text?: string,
        private readonly audioUrl?: string,
        private readonly imageUrl?: string,
        private readonly videoUrl?: string
    ) {}
}


class MCQuizPart {
    constructor(
        private readonly isCorrect?: boolean
    ){}
}


class PairQuizPart {
    constructor(
        private readonly pairContent?: QuizPartContent
    ){}
}


class QuizPart {
    constructor(
        private content: QuizPartContent,
        private mcQuizPart?: MCQuizPart,
        private pairQuizPart?: PairQuizPart
    ){}
}


class Quiz extends LearningPart {
    constructor(
        protected readonly id: string,
        private readonly type: QuizType,
        private readonly voiceSpeaker: string,
        private readonly voiceSpeed: number,
        private readonly score: number,
        private readonly quizParts: QuizPart[],
        private readonly questionBackgroundUrl?: string,
        private readonly questionBackgroundOpacity?: string,
        private readonly questionText?: string,
        private readonly questionImageUrl?: string,
        private readonly questionAudioUrl?: string,
        private readonly questionVideoUrl?: string
    ){
        super(id);
    }
}
