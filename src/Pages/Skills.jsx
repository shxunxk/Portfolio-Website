import React from 'react';

const Skills = ({getPage}) => {
    getPage('My Skillset')
    const skills = {
        "webdev": {
            "Title": "Web Development",
            "Languages and Frameworks": {
                "HTML": {"img":'https://imgs.search.brave.com/A8Vg4g1VOmxTBauiKKUP-Xp_aOjTkbg9Tqda5qwTgmc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzYxL0hU/TUw1X2xvZ29fYW5k/X3dvcmRtYXJrLnN2/Zy8yMjBweC1IVE1M/NV9sb2dvX2FuZF93/b3JkbWFyay5zdmcu/cG5n', "details":[]},
                "CSS": {"img":'https://imgs.search.brave.com/QDzUzmK7oNgYEshF8l5T5wgMjGevyxUEreIxyefjuYA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0NTUy1Mb2dvLTUw/MHgzMTMucG5n', "details":[]},
                "JavaScript": {"img":'https://imgs.search.brave.com/IHZnguQFJrsQazmJVr7bS-PfCI9pkvM5DDxqOSrK1OQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk5L1Vu/b2ZmaWNpYWxfSmF2/YVNjcmlwdF9sb2dv/XzIuc3ZnLzIyMHB4/LVVub2ZmaWNpYWxf/SmF2YVNjcmlwdF9s/b2dvXzIuc3ZnLnBu/Zw', "details":[]},
                "React JS": {"img":'https://imgs.search.brave.com/fXOjhya7zj690CCT_lYjisQ0Unx4EQzOAhHXPYMuS7s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2E3L1Jl/YWN0LWljb24uc3Zn/LzY0MHB4LVJlYWN0/LWljb24uc3ZnLnBu/Zw', "details":["Frontend Web Development"]},
                "Next JS": {"img":'https://imgs.search.brave.com/BVIPMS6myxMzxoYYoz2K0sQjVOgu-gB9GBD9h7T8ldc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbmV4dC1q/cy1sb2dvLThGQ0ZG/NTFERDItc2Vla2xv/Z28uY29tLnBuZw', "details":["Frontend and Backend Web Development"]},
                "Node JS": {"img":'https://imgs.search.brave.com/Ip8c9fopbms33y8-Bm0CA1HFMv7mJnSPxaezkK4YxmM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2Q5L05v/ZGUuanNfbG9nby5z/dmcvNjQwcHgtTm9k/ZS5qc19sb2dvLnN2/Zy5wbmc', "details":["Backend Web Development"]},
                "Tailwind": {"img":'https://imgs.search.brave.com/hGwT1XWOE5s9l6sFNaWVB3YKfeoo0hadewIgx8rhdFA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L1RhaWx3aW5k/X0NTU19Mb2dvLnN2/Zw.svg', "details":["Web Styling"]},

            }
        },
        "machineLearning": {
            "Title": "Artificial Intelligence",
            "Area Covered": {
                "Machine Learning": {"img":'https://imgs.search.brave.com/rZsO1RGE-CaZNRcKlsmJCwM-L6cWzpoJFMK8G-4rAg8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kYXRh/c2NpZW50ZXN0LmNv/bS9lbi93cC1jb250/ZW50L3VwbG9hZHMv/c2l0ZXMvOS8yMDIx/LzAxL01hY2hpbmUt/bGVhcm5pbmctZGVm/LS5wbmc', "details":["Supervised Learning", "Unsupervised Learning"]},
                "Deep Learning": {"img":'https://imgs.search.brave.com/ff7K41oFdprY03ZTyvX-mXqf7fluUHqC7VW-RFtbl9U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMTEyMjYx/NTAwNTIva2lzc3Bu/Z2RlZXBsZWFybmlu/Z2FydGlmaWNpYWxu/ZXVyYWxuZXR3b3Jr/bWFjaGluZWxlbmV1/cm9uczVhZGI3N2Q2/MTU5MTg5Nzc1Njkx/NjYxNTI0MzMyNTAy/MDg4NC5wbmc', "details":["Artificial Neural Network"]},
                "Generative AI": {"img":'https://imgs.search.brave.com/BvzJUSSAr8BgHaYXh5a0zQhlS6TMOsubnqAPHU94wZI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE2L0dlbkFJX0Fn/ZW50LnBuZw', "details":["Large Language Models(LLM's)"]}
            }
        },
        "datascience": {
            "Title": "Data Engineering",
            "Area Covered": {
                "Data Anaytics": {"img":'https://imgs.search.brave.com/5qxyLeT9DTzDbo7uiIDCeH2a30iRekq8_DfKnHboArY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzA3LzUwLzc4/LzM2MF9GXzcwNzUw/NzgzNV9vT1hkUzJC/Z0lCWENOZWp2ZjRH/VENGVDZDemltS0hP/Ty5qcGc', "details":["Power BI"]},
                "Database Engineering": {"img":'https://imgs.search.brave.com/iAY8DkYzTDJVVJj6HJTxz87LRhmXDfdVY962xVnAHu4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzM0LzQzLzk0/LzM2MF9GXzUzNDQz/OTQ4Nl9MTm8yb2cw/T0NGTjFUVVF3Mmdo/THA5SkVTNm1LQzBs/Vy5qcGc', "details":["Stuructured Query Languages: PostgreSQL, MySql", "No Stuructured Query Languages: MongoDB"]}
            }
        }
    };

    return (
        <>
            <div className='skill' style={{padding:"0px 50px 0px 50px"}}>
                {Object.entries(skills).map(([key, skill]) => (
                    <div key={key} style={{textAlign:'center', paddingBottom:'8%' }}>
                        <h2 style={{paddingBottom:'8%', font:'bold'}}>{skill.Title}</h2>
                        <div>
                            {Object.entries(skill).map(([category, items]) => (
                                category !== 'Title' && (
                                    <div key={category}>
                                        <h4 style={{paddingBottom:'2%'}}>{category}:</h4>
                                        <div style={{display:'grid',gridTemplateColumns: "repeat(3, 1fr)", gap:'1%'}}>
                                            {Object.entries(items).map(([subCategory, subItems]) => (
                                                <div key={subCategory} style={{height:'250px', width:'100%', backgroundColor:'yellowgreen', borderRadius:'20px', display: 'flex', flexDirection:'column', alignItems:'center', padding:"5%"}}>
                                                    <img style={{height:'70%', padding:'3%', borderRadius:'30px'}} src = {subItems["img"]}/>
                                                    <h4>{subCategory}</h4>
                                                    {subItems.details.length > 0 && (
                                                        <div style={{padding:'3%'}}>
                                                            {subItems.details.map((subItem, index) => (
                                                                <div key={index}>{subItem}</div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Skills;
