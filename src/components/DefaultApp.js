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
            allPosts: postsData,
            startingPos: 0,
            posts: [],
            isThereMore: true
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        let newPosts = postsData.slice(this.state.startingPos, this.state.startingPos + 16);
        if (this.state.posts.length + newPosts.length === this.state.allPosts.length) {
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

    sortAndFilter = () => {
        let results = [];
        if (this.state.mainSelectedOption === "USER SUBMITTED" && this.state.alternativeSelectedOption === "POPULAR") {
            // must be user sumbitted and are sorted by views in ascending order
            results = this.state.allPosts.filter(post => post.user_submitted === true).sort((a, b) => a.views > b.views ? 1 : -1);
        } else if (this.state.mainSelectedOption === "USER SUBMITTED" && this.state.alternativeSelectedOption === "RISING") {
            // must be user sumbitted and are sorted by upvotes in ascending order
            results = this.state.allPosts.filter(post => post.user_submitted === true).sort((a, b) => a.upvotes > b.upvotes ? 1 : -1);
        } else if (this.state.mainSelectedOption === "USER SUBMITTED" && this.state.alternativeSelectedOption === "NEWEST") {
            // must be user sumbitted and are sorted by date submitted
            results = this.state.allPosts.filter(post => post.user_submitted === true).sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
        }
        console.log(results);
        // }  else if (mainOption === "HIGHEST SCORING" && alternativeOption === "TODAY") {
        //     // must be user sumbitted and are sorted by date submitted
        //     results = [];
        // } else if (mainOption === "HIGHEST SCORING" && alternativeOption === "WEEK") {
        //     // must be user sumbitted and are sorted by date submitted
        //     results = data.filter(post => post.user_submitted === true).sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
        // } else if (mainOption === "HIGHEST SCORING" && alternativeOption === "MONTH") {
        //     // must be user sumbitted and are sorted by date submitted
        //     results = data.filter(post => post.user_submitted === true).sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
        // } else if (mainOption === "HIGHEST SCORING" && alternativeOption === "YEAR") {
        //     // must be user sumbitted and are sorted by date submitted
        //     results = data.filter(post => post.user_submitted === true).sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
        // } else if (mainOption === "HIGHEST SCORING" && alternativeOption === "ALL TIME") {
        //     // must be user sumbitted and are sorted by date submitted
        //     results = data.filter(post => post.user_submitted === true).sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
        // } else {
        //     results = data;
        // }
    }

    render() {
        return (
            <div className="App">
                <Header openMain={this.state.openMainCoverOptions} openAlternative={this.state.openAdditionalCoverOptions}
                mainOption={this.state.mainSelectedOption} alternativeOption={this.state.alternativeSelectedOption}
                handleAlternativeOptionSelection={this.handleAlternativeOptionSelection} handleMainOptionSelection={this.handleMainOptionSelection}
                handleButtonClick={this.handleButtonClick} handleDropdownOptionsReset={this.handleDropdownOptionsReset}/>
                <Body posts={this.state.posts} more={this.state.isThereMore} formatNumber={this.formatNumber} fetchData={this.fetchData}/>
                <Footer />
            </div>
        );
    }

    // openMainCoverOptions: false,
    //         openAdditionalCoverOptions: false,
    //         mainSelectedOption: "MOST VIRAL",
    //         alternativeSelectedOption: "POPULAR",
    // handleAlternativeOptionSelection
    // handleMainOptionSelection
    // handleButtonClick
    // handleDropdownOptionsReset

}

export default DefaultApp;