import "./NewsCard.css"


const NewsList = [
    {
        id: 1,
        title: 'Discloses Reits DAO’s first investment IPO schedule and fundraising amount.',
        date: '06.11.2022',
    },
    {
        id: 2,
        title: 'We are announcing the first investment product of Reits DAO.',
        date: '06.11.2022',
    },
    {
        id: 3,
        title: 'Trend Royale 2nd Investment Site Pre-Tour Schedule',
        date: '06.11.2022',
    },
]

function NewsCard () {
    return (
        <>
            <div className="newscard">
                <img src="./images/mediumnewsicon.svg" alt=""/>
                <div className="newsinbox">
                    <div className="news-title">
                         Discloses Reits DAO’s first investment IPO schedule and fundraising amount.
                    </div>
                    <div className="newsdate">
                        06.11.2022
                    </div>
                </div>
            </div>
        </>
    )
}
// <a href={id.title}>{id.title}</a>
export default NewsCard