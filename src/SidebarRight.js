import React, { Component } from 'react'
import { connect } from 'react-redux'
import SubscribeFrom from 'react-mailchimp-subscribe'

class SidebarRight extends Component {
    renderFeaturedSong(song, index) {
        return (
            <div className="songContainer" key={index}>
                <img alt="songImage" className="songImage" src={song.better_featured_image.source_url} />
                <div className="songInfo">
                    <span className="songName">{song.acf.song_name}</span> <br />
                    <span className="artistName">{song.acf.artist_name}</span>
                </div>
            </div>
        )
    }
    render() {
        const formProps = {
            action: 'https://rockwiththis.us17.list-manage.com/subscribe/post?u=bfac2b1c3906a8dba6db52ab1&amp;id=ddc17b51d2" method="post" id="mc-embedded-subscribe-form',
            messages: {
                inputPlaceholder: '',
                btnLabel: 'Subscribe',
                sending: 'Sending',
                success: 'Thanks!',
                error: 'Woops... something went wrong.'
            },
            styles: {
                sending: {
                    fontSize: 18,
                    color: 'auto'
                },
                success: {
                    fontSize: 18,
                    color: 'green'
                },
                error: {
                    fontSize: 18,
                    color: 'red'
                }
            }
        }
        const featuredPosts = this.props.featuredPosts.map(this.renderFeaturedSong)
        return (
            <div className="sidebarRight">
                <div className="topTrackContainer">
                    <h3>Top Tracks <i className="fa fa-question-circle tooltip" aria-hidden="true"><span className="tooltiptext">Dive a bit deeper. Explore top tracks we've featured in the past.</span></i></h3>
                    {featuredPosts}
                </div>
                <div className="newsletterContainer">
                    <h3>Heads up <i className="fa fa-question-circle tooltip" aria-hidden="true"><span className="tooltiptext">Enter your email address for new music and concert updates around the area.</span></i></h3>
                    <SubscribeFrom {...formProps} />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    featuredPosts: state.featuredPosts,
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SidebarRight)
