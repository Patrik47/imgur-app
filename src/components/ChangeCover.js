import React from "react";
import "./ChangeCover.css";
import { MdArrowDropDown } from "react-icons/md";
import AlternativeOptions from "./AlternativeOptions";

export default function ChangeCover(props) {

    const mainOptions = ["MOST VIRAL", "USER SUBMITTED", "HIGHEST SCORING"];
    return (
        <div className="change-cover">
            <div className="cover-sort">
                <span className="cover-sort-wrapper">
                    <div className="dropdown-title" onClick={() => props.handleButtonClick('main')}>
                        <span style={{ marginRight: 5 + 'px' }}>{props.mainOption}</span>
                        <MdArrowDropDown size={20} />
                    </div>
                    {props.openMain && (
                        <div className="dropdown-menu">
                            <svg width="24" height="8" viewBox="0 0 24 8" className="dropdown-triangle" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title>icon</title>
                                <path fill="#53565d" d="M10.3359 1.1094C11.3436 0.437601 12.6564 0.437601 13.6641 1.1094L24 8L3.05823e-09 8L10.3359 1.1094Z"></path>
                            </svg>
                            <div className="dropdown-list">
                                {mainOptions.map((option, i) => {
                                    return (
                                        <div className="dropdown-option" key={i} onClick={props.handleMainOptionSelection}
                                            style={{
                                                fontWeight: props.mainOption === option ? 'bold' : 'normal',
                                                color: props.mainOption === option ? 'white' : null
                                            }}>{option}</div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </span>
                <span className="cover-sort-wrapper">
                    <div className="dropdown-title" onClick={() => props.handleButtonClick('other')}>
                        <span style={{ marginRight: 5 + 'px' }}>{props.alternativeOption}</span>
                        <MdArrowDropDown size={20} />
                    </div>
                    {props.openAlternative && (
                        <div className="dropdown-menu">
                            <svg width="24" height="8" viewBox="0 0 24 8" className="dropdown-triangle" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title>icon</title>
                                <path fill="#53565d" d="M10.3359 1.1094C11.3436 0.437601 12.6564 0.437601 13.6641 1.1094L24 8L3.05823e-09 8L10.3359 1.1094Z"></path>
                            </svg>
                            <AlternativeOptions mainSelectedOption={props.mainOption} handleAlternativeOptionSelection={props.handleAlternativeOptionSelection}
                                alternateOptionSelected={props.alternativeSelectedOption} />
                        </div>
                    )}
                </span>
            </div>
            <div className="change-view">
                <div className="change-appearance">
                    <img className="img" alt="img1" src="https://s.imgur.com/desktop-assets/desktop-assets/icon-filter.20c41e094857405f1469.svg"></img>
                </div>
                <div className="change-appearance" style={{ marginLeft: 16 + 'px' }}><img className="img" alt="img2" src="https://s.imgur.com/desktop-assets/desktop-assets/icon-play.aba7568f963e6376b7d1.svg"></img></div>
                <div className="change-appearance" onClick={props.handleLayout} style={{marginLeft: 16 + 'px', display: props.masonryLayout ? null : "none"}}>
                    <svg className="img" xmlns="http://www.w3.org/2000/svg" version="1.1" width="17" height="17" fill="white"><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"></rect><g><g><g><polygon points="6.17870715566179,0 1.1573245256338325,0 0.15306144952774048,0 0.15306144952774048,1.0042672515679527 0.15306144952774048,6.0256540079346905 0.15306144952774048,7.02991762439467 1.1573245256338325,7.02991762439467 6.17870715566179,7.02991762439467 7.18298727747689,7.02991762439467 7.18298727747689,6.0256540079346905 7.18298727747689,1.0042672515679527 7.18298727747689,0 "></polygon></g></g><g><g><polygon points="6.278707504272461,10 1.25732421875,10 0.25306129455566406,10 0.25306129455566406,11.004266738891602 0.25306129455566406,16.025653839111328 0.25306129455566406,17.029918670654297 1.25732421875,17.029918670654297 6.278707504272461,17.029918670654297 7.282987594604492,17.029918670654297 7.282987594604492,16.025653839111328 7.282987594604492,11.004266738891602 7.282987594604492,10 "></polygon></g></g><g><g><polygon points="15.978708267211914,9.900003053247929 10.957324981689453,9.900003053247929 9.953062057495117,9.900003053247929 9.953062057495117,10.90426979213953 9.953062057495117,15.925656892359257 9.953062057495117,16.929921723902225 10.957324981689453,16.929921723902225 15.978708267211914,16.929921723902225 16.982988357543945,16.929921723902225 16.982988357543945,15.925656892359257 16.982988357543945,10.90426979213953 16.982988357543945,9.900003053247929 "></polygon></g></g><g><g><polygon points="15.878707885742188,-0.10000000149011612 10.857324600219727,-0.10000000149011612 9.85306167602539,-0.10000000149011612 9.85306167602539,0.9042667374014854 9.85306167602539,5.925653837621212 9.85306167602539,6.929918669164181 10.857324600219727,6.929918669164181 15.878707885742188,6.929918669164181 16.88298797607422,6.929918669164181 16.88298797607422,5.925653837621212 16.88298797607422,0.9042667374014854 16.88298797607422,-0.10000000149011612 "></polygon></g></g></g></svg></div>
                <div className="change-appearance" onClick={props.handleLayout} style={{marginLeft: 16 + 'px', display: !props.masonryLayout ? null: "none"}}>
                    <svg className="img" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="white"><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"></rect><g><g><g id="svg_10"><polygon points="6.178707122802734,0 1.1573245525360107,0 0.15306150913238525,0 0.15306150913238525,1.2756938815360286 0.15306150913238525,7.654227611753868 0.15306150913238525,8.929917633937634 1.1573245525360107,8.929917633937634 6.178707122802734,8.929917633937634 7.182987213134766,8.929917633937634 7.182987213134766,7.654227611753868 7.182987213134766,1.2756938815360286 7.182987213134766,0 "></polygon></g></g><g><g id="svg_34"><polygon points="6.278707504272461,12.099999867934457 1.25732421875,12.099999867934457 0.25306129455566406,12.099999867934457 0.25306129455566406,12.804268837391646 0.25306129455566406,16.325651648036 0.25306129455566406,17.029918670654297 1.25732421875,17.029918670654297 6.278707504272461,17.029918670654297 7.282987594604492,17.029918670654297 7.282987594604492,16.325651648036 7.282987594604492,12.804268837391646 7.282987594604492,12.099999867934457 "></polygon></g></g><g><g id="svg_38"><polygon points="15.978708267211914,8.100003717719119 10.957324981689453,8.100003717719119 9.953062057495117,8.100003717719119 9.953062057495117,9.361411389385012 9.953062057495117,15.66851682793822 9.953062057495117,16.929922103881836 10.957324981689453,16.929922103881836 15.978708267211914,16.929922103881836 16.982988357543945,16.929922103881836 16.982988357543945,15.66851682793822 16.982988357543945,9.361411389385012 16.982988357543945,8.100003717719119 "></polygon></g></g><g><g><polygon points="15.878707885742188,-0.10000000149011612 10.857324600219727,-0.10000000149011612 9.85306167602539,-0.10000000149011612 9.85306167602539,0.6185544841542594 9.85306167602539,4.2113652655988005 9.85306167602539,4.929918346846392 10.857324600219727,4.929918346846392 15.878707885742188,4.929918346846392 16.88298797607422,4.929918346846392 16.88298797607422,4.2113652655988005 16.88298797607422,0.6185544841542594 16.88298797607422,-0.10000000149011612 "></polygon></g></g></g></svg></div>
            </div>
        </div>
    );
}
