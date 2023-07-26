import React from "react";
import '../App.css';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import postsData from "../posts.json";

class DefaultApp extends React.Component {
    constructor() {
        super();
        this.state = {
            openMainCoverOptions: false,
            openAdditionalCoverOptions: false,
            mainSelectedOption: "MOST VIRAL",
            alternativeSelectedOption: "POPULAR",
            filteredPosts: postsData,
            startingPos: 0,
            posts: [],
            isThereMore: true,
            masonryLayout: true
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.mainSelectedOption !== this.state.mainSelectedOption || prevState.alternativeSelectedOption !== this.state.alternativeSelectedOption) {
            this.sortAndFilter();
        } else if (prevState.filteredPosts !== this.state.filteredPosts || (prevState.posts.length !== 0 && this.state.posts.length === 0)) {
            this.fetchData();
        }
    }

    fetchData = () => {
        let newPosts = this.state.filteredPosts.slice(this.state.startingPos, this.state.startingPos + 16);
        if (this.state.posts.length + newPosts.length === this.state.filteredPosts.length) {
            this.setState({ isThereMore: false });
        }
        this.setState({
            posts: this.state.posts.concat(newPosts),
            startingPos: this.state.startingPos + 16
        });
    }

    formatNumber = number => {
        if (number < 1e3) return number;
        if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + "K";
        if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + "M";
        if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + "B";
        if (number >= 1e12) return +(number / 1e12).toFixed(1) + "T";
    }

    handleDropdownOptionsReset = () => {
        this.setState(() => {
            return {
                openAdditionalCoverOptions: false,
                openMainCoverOptions: false
            }
        });
    }

    handleButtonClick = option => {
        if (option === 'main') {
            this.setState((state) => {
                return {
                    openMainCoverOptions: !state.openMainCoverOptions
                };
            });
        } else {
            this.setState((state) => {
                return {
                    openAdditionalCoverOptions: !state.openAdditionalCoverOptions
                };
            });
        }
    };

    handleMainOptionSelection = event => {
        this.handleDropdownOptionsReset();
        this.setState(() => {
            if (event.target.innerText === "MOST VIRAL" || event.target.innerText === "USER SUBMITTED") {
                return {
                    mainSelectedOption: event.target.innerText,
                    alternativeSelectedOption: "POPULAR"
                };
            } else {
                return {
                    mainSelectedOption: event.target.innerText,
                    alternativeSelectedOption: "TODAY"
                }
            }
        });
    }

    handleAlternativeOptionSelection = event => {
        this.handleDropdownOptionsReset();
        this.setState(() => {
            return {
                alternativeSelectedOption: event.target.innerText
            };
        });
    }

    handleLayoutChange = () => {
        this.setState({
            masonryLayout: !this.state.masonryLayout
        });
    }

    sortAndFilter = () => {
        if (this.state.mainSelectedOption === "USER SUBMITTED" && this.state.alternativeSelectedOption === "POPULAR") {
            // must be user sumbitted and are sorted by views in ascending order
            this.setState({
                filteredPosts: postsData.filter(post => post.user_submitted === true).sort((a, b) => a.views > b.views ? -1 : 1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "USER SUBMITTED" && this.state.alternativeSelectedOption === "RISING") {
            // must be user sumbitted and are sorted by upvotes in ascending order
            this.setState({
                filteredPosts: postsData.filter(post => post.user_submitted === true).sort((a, b) => a.upvotes > b.upvotes ? -1 : 1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "USER SUBMITTED" && this.state.alternativeSelectedOption === "NEWEST") {
            // must be user sumbitted and are sorted by date submitted from latest to oldest
            this.setState({
                filteredPosts: postsData.filter(post => post.user_submitted === true)
                .sort((a, b) => new Date(a.date).toISOString().split('T')[0] < new Date(b.date).toISOString().split('T')[0] ? 1 : -1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "HIGHEST SCORING" && this.state.alternativeSelectedOption === "TODAY") {
            // posts posted today and sorted by upvotes from highest to lowest
            this.setState({
                filteredPosts: postsData.filter(post => new Date(post.date).toISOString().split('T')[0] === new Date().toISOString().split('T')[0])
                .sort((a, b) => a.upvotes > b.upvotes ? -1 : 1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "HIGHEST SCORING" && this.state.alternativeSelectedOption === "WEEK") {
            // posts posted within 7 days and sorted by upvotes from highest to lowest 
            this.setState({
                filteredPosts: postsData.filter(post => new Date(post.date).getFullYear() === new Date().getFullYear() 
                && new Date(post.date).getMonth() === new Date().getMonth() && (new Date().getDate() - new Date(post.date).getDate() >= 0 
                && new Date().getDate() - new Date(post.date).getDate() < 7))
                .sort((a, b) => a.upvotes > b.upvotes ? -1 : 1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "HIGHEST SCORING" && this.state.alternativeSelectedOption === "MONTH") {
            // posts posted within the current month and year and sorted by upvotes from highest to lowest
            this.setState({
                filteredPosts: postsData.filter(post => new Date(post.date).getFullYear() === new Date().getFullYear() 
                && new Date(post.date).getMonth() === new Date().getMonth())
                .sort((a, b) => a.upvotes > b.upvotes ? -1 : 1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "HIGHEST SCORING" && this.state.alternativeSelectedOption === "YEAR") {
            // posts posted within the same year and sorted by upvotes from highest to lowest
            this.setState({
                filteredPosts: postsData.filter(post => new Date(post.date).getFullYear() === new Date().getFullYear())
                .sort((a, b) => a.upvotes > b.upvotes ? -1 : 1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "HIGHEST SCORING" && this.state.alternativeSelectedOption === "ALL TIME") {
            // all posts sorted by upvotes from highest to lowest
            this.setState({
                filteredPosts: postsData.sort((a, b) => a.upvotes > b.upvotes ? -1 : 1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "MOST VIRAL" && this.state.alternativeSelectedOption === "POPULAR") {
            // posts with upvotes higher than 1000 and comments higher than 100, sorted by upvotes in desceding order
            this.setState({
                filteredPosts: postsData.filter(post => post.upvotes > 1000 && post.number_of_comments > 100).sort((a, b) => a.upvotes > b.upvotes ? -1 : 1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "MOST VIRAL" && this.state.alternativeSelectedOption === "NEWEST") {
            // posts with upvotes higher than 1000 and comments higher than 100, sorted by date from latest to oldest
            this.setState({
                filteredPosts: postsData.filter(post => post.upvotes > 1000 && post.number_of_comments > 100)
                .sort((a, b) => new Date(a.date).toISOString().split('T')[0] < new Date(b.date).toISOString().split('T')[0] ? 1 : -1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "MOST VIRAL" && this.state.alternativeSelectedOption === "BEST") {
            // posts with upvotes higher than 1000 and comments higher than 100, sorted sum of upvotes and comments in descending order
            this.setState({
                filteredPosts: postsData.filter(post => post.upvotes > 1000 && post.number_of_comments > 100)
                .sort((a, b) => a.upvotes + a.number_of_comments > b.upvotes + b.number_of_comments ? -1 : 1),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else if (this.state.mainSelectedOption === "MOST VIRAL" && this.state.alternativeSelectedOption === "RANDOM") {
            // posts with upvotes higher than 1000 and comments higher than 100, picked randomly
            this.setState({
                filteredPosts: postsData.slice(0, Math.floor(Math.random() * (postsData.length - 1) + 1))
                .filter(post => post.upvotes > 1000 && post.number_of_comments > 100),
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        } else {
            this.setState({
                filteredPosts: postsData,
                startingPos: 0,
                isThereMore: true,
                posts: []
            });
        }
    }

    render() {
        return (
            <div className="App">
                <Header openMain={this.state.openMainCoverOptions} openAlternative={this.state.openAdditionalCoverOptions}
                    mainOption={this.state.mainSelectedOption} alternativeOption={this.state.alternativeSelectedOption}
                    handleAlternativeOptionSelection={this.handleAlternativeOptionSelection} handleMainOptionSelection={this.handleMainOptionSelection}
                    handleButtonClick={this.handleButtonClick} handleDropdownOptionsReset={this.handleDropdownOptionsReset} 
                    masonryLayout={this.state.masonryLayout} handleLayout={this.handleLayoutChange}/>
                <Body posts={this.state.posts} more={this.state.isThereMore} formatNumber={this.formatNumber} fetchData={this.fetchData} masonryLayout={this.state.masonryLayout}/>
                <Footer />
            </div>
        );
    }

}

export default DefaultApp;