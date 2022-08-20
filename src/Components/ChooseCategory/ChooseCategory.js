import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { CategoryContext } from '../../store/CategoryContext';
import './ChooseCategory.css'

function ChooseCategory() {
    const {setCatgry} = useContext(CategoryContext);
    const navigate =useNavigate();
    return (
        <div classNameName="container">
        <div className="choose-parent">
            <div className="choose-child">
                <div className="heading">
                    <h1>POST YOUR AD</h1>
                </div>
                <div className="box">
                    <h3>CHOOSE A CATEGORY</h3>
                    <div className="category-box">
                        <ul className="category">
                            <li className="list"
                            onClick={()=>{
                                setCatgry("Cars");
                                navigate('/create');
                            }}>
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M744.747 124.16l38.4 33.28 36.949 258.731 107.221 107.179 11.349 27.435v193.963l-38.827 38.784h-38.741v116.352h-77.568v-116.352h-543.061v116.352h-77.568v-116.352h-38.741l-38.827-38.827v-193.877l11.349-27.435 107.264-107.221 36.949-258.731 38.4-33.28h465.493zM768.555 474.325h-513.109l-92.544 92.501v139.093h698.197v-139.093l-92.544-92.501zM298.667 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM725.333 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM711.083 201.685h-398.165l-27.904 195.115h453.888l-27.861-195.072z"></path></svg>
                                <span>Cars</span>
                                <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                            </li>
                            <li className="list"
                            onClick={()=>{
                                setCatgry("Motorcycle")
                                navigate('/create')
                            }}>
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M674.657 245.333l47.813 129.715 23.448-51.706h51.11l26.563 33.51v80.171h-78.406l26.746 72.064h9.892c75.576 0 136.843 60.253 136.843 134.579s-61.267 134.579-136.843 134.579c-59.691-0.227-112.346-38.479-130.112-94.523s3.455-116.947 52.44-150.495v0l2.931-1.982-28.578-78.189-77.49 225.74h-167.070v3.243c-19.579 65.476-85.893 106.172-154.3 94.693s-117.248-71.498-113.643-139.654c3.605-68.156 58.515-122.867 127.764-127.303s130.911 42.808 143.476 109.928v0 3.783h122.554l22.716-66.839h-121.455l-61.735-80.171h-197.662l-58.071 132.598-36.638 9.008-21.616-28.826 69.796-168.089h228.255l64.849-62.696h196.197l-16.304-44.319h-89.763v-68.821h136.294zM796.845 577.368l25.463 69.362-20.884 31.888-43.233-6.306-26.746-75.307-5.129 6.846v0.54c-17.559 23.523-17.878 55.449-0.79 79.306s47.76 34.314 76.196 25.976c28.435-8.338 48.277-33.608 49.289-62.772s-17.032-55.706-44.823-65.931v0l-9.343-3.603zM365.248 616.823c-12.157-27.922-41.767-44.432-72.372-40.354s-54.681 27.74-58.847 57.836c-4.166 30.096 12.603 59.227 40.986 71.201s61.403 3.848 80.707-19.861v0l5.862-7.387-85 0.18v-57.111l29.86-18.016 30.41 19.818h31.142zM627.943 413.233h-153.88l-31.142 33.568 32.791 46.432h128.233l23.998-80zM318.667 345.333v66.667h-133.333v-66.667h133.333z"></path></svg>
                                <span>Motorcycle</span>
                                <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                            </li>
                            <li className="list"
                            onClick={()=>{
                                setCatgry('Mobile')
                                navigate('/create')
                            }}>
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"></path></svg>
                                <span>Mobile</span>
                                <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                            </li>
                            <li className="list"
                            onClick={()=>{
                                setCatgry('Electronics')
                                navigate('/create')
                            }}>
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M149.76 128l-64.427 62.848v480.853l69.333 67.84h317.781l0.725 75.477h-169.6v80.981h416.128v-80.981h-161.621l-0.683-75.435h315.648l65.621-68.693v-482.389l-75.733-60.501h-713.173zM170.24 638.72v-414.848l15.232-14.848h646.656l21.632 17.28v413.184l-18.176 19.072h-645.12l-20.224-19.84z"></path></svg>
                                <span>Electronics</span>
                                <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                            </li>
                            <li className="list"
                            onClick={()=>{
                                setCatgry('Furniture')
                                navigate('/create')
                            }}>
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M268.748 91.803l-70.244 96.818v124.45l-24.559-0.152-82.195 104.783v430.333h152.539v75.637h91.975v-75.637h333.816v75.637h91.975v-75.637h170.135v-436.888l-82.295-97.219h-4.335v-117.692l-78.665-104.431h-498.206zM429.605 396.172l-79.319-82.195-59.755-0.353v-95.152l25.112-34.692h405.422l32.524 43.213v86.934h-87.64l-65.504 77.403v75.284h-170.792v-70.444zM183.829 449.472l34.743-44.274 92.48 0.505 26.626 27.632v125.207h354.845v-133.528l16.137-19.111h98.633l32.977 38.93v311.176h-656.49v-306.588z"></path></svg>
                                <span>Furniture</span>
                                <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-10_kq" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ChooseCategory
