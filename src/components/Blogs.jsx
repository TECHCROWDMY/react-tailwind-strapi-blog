import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({blogs}) => {

    console.log("Blog Object")
    console.log(blogs)

    const blogs1=[
        {
            "id":1,
            'title':'Blog 1',
            'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
            'authorName':'John Doe',
            'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Web Developer'
    
        },
        {
            "id":2,
            'title':'Blog 2',
            'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
            'authorName':'John Doe',
            'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Web Developer'
        },
        {
            "id":3,
            'title':'Blog 3',
            'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            'content':'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
            'authorName':'John Doe',
            'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Web Developer'
        },
    ]



  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
                
                
            {blogs.data.map((blog)=>
                <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{blog.attributes.blogTitle}</h3>
                            <p className='text-gray-600 text-xl'>{blog.attributes.blogDesc}</p>
                        </div>
                    </div>
                </Link>

            )}









                {/* {blogs1.map((blog)=>

                <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src={blog.coverImg} />
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                            <p className='text-gray-600 text-xl'>{blog.desc}</p>
                        </div>
                    </div>
                </Link>
                
                
                
                )} */}

                



            </div>

        </div>
    </div>
  )
}

export default Blogs