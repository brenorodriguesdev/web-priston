import { RankPlayer, RankClan, TopRankBody, TopRankClanBody } from "../..";

function TopRanking() {

    const blessCastleClanLeader: RankClan[] = [

        { tagId: 3, clanName: "Reign", points: 120 }
    ]

    const bellatraClanLeader: RankClan[] = [

        { tagId: 3, clanName: "Reign", points: 120 }
    ]

    const playerLevel: RankPlayer[] = [

        { classId: 1, nickname: "Player1", value: 120 },
        { classId: 2, nickname: "Player2", value: 120 },
        { classId: 3, nickname: "Player3", value: 120 },
        { classId: 4, nickname: "Player4", value: 120 },
        { classId: 5, nickname: "Player5", value: 120 }
    ]

    const playerPvp: RankPlayer[] = [

        { classId: 1, nickname: "Player1", value: 200 },
        { classId: 2, nickname: "Player2", value: 200 },
        { classId: 3, nickname: "Player3", value: 200 },
        { classId: 4, nickname: "Player4", value: 200 },
        { classId: 5, nickname: "Player5", value: 200 },
    ]

    const playerViciado: RankPlayer[] = [

        { classId: 1, nickname: "Player1", value: 120000 },
        { classId: 2, nickname: "Player2", value: 120000 },
        { classId: 3, nickname: "Player3", value: 120000 },
        { classId: 4, nickname: "Player4", value: 120000 },
        { classId: 5, nickname: "Player5", value: 120000 }
    ]

    const topClanBlessCastle = [
        
        <TopRankClanBody
            title="Castelo Bless" 
            img={<img
            className="h-auto w-auto"
            src="./bc.png"
            style={{ width: 'auto', height: '3rem'}}
            alt="bellatra"
        />} data={blessCastleClanLeader} />
    ]

    const topClanBellatra = [

        <TopRankClanBody
            title="Bellatra"  
            img={<img
            className="h-auto w-auto"
            src="./bellatra.png"
            style={{ width: 'auto', height: '3rem' }}
            alt="bellatra"
        />} data={bellatraClanLeader} />
    ]

    const topRankings = [

        <TopRankBody title="Top Viciados" data={playerViciado} />,
        <TopRankBody title="Top Level" data={playerLevel} />,
        <TopRankBody title="Top Pvp" data={playerPvp} />
    ]

    return (
        <div className="max-w-6xl mx-auto px-4 bg-white sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-600 pt-8 sm:text-4xl">Placar dos Líderes</h2>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="mt-10 space-y-12 lg:space-y-0 lg:grid grid-cols-4" style={{ display: 'flex', flexDirection: 'column', width: '25rem', marginRight: '2rem' }}>
                    {topClanBlessCastle.map(topClanBlessCastle => topClanBlessCastle)}
                    {topClanBellatra.map(topClanBellatra => topClanBellatra)}
                </div>
                <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8" style={{ width: '90rem' }}>
                    {topRankings.map(topRankings => topRankings)}
                </div>
            </div>

        </div>
    )
}

export { TopRanking };