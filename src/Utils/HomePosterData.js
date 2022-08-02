import { Linking,Share } from "react-native";

const posterData=[
    {
      name: 'spiderman no way home',
      posterUrl:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202111/spider_man_no_way_home_india_1638191040.jpg',
    },
    {
      name: 'aarya',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BNzY1NDE2MWQtNzJlOC00MGZiLTkxN2YtMTQ5YWVkMTA2MGU5XkEyXkFqcGdeQXVyMTE0MDk1NjA1._V1_.jpg',
    },
    {
      name: 'aranyak',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BYjQ2NDVjYjItNmIxNC00NDQ1LTgzOTctM2ExMTA0ZjlhZTgxXkEyXkFqcGdeQXVyNjc3MzU4Mzc@._V1_.jpg',
    },
    {
      name: 'resident evil',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BNjRmMDUxODctYjg3NC00NDRhLWJhZWItMjg0OTZkMDBjNWUxXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
    },
    {
      name: 'money heist',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
    },
    {
      name: 'bob biswas',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BMjZjYjcxODItNzBlNy00NDI5LWJlOGItNGEzMDE0OTE3ZTFmXkEyXkFqcGdeQXVyMTIzMzg0MTM2._V1_.jpg',
    },
    {
      name: 'sooryavanshi',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BNDI3M2E5ZGQtZjVlNS00NzFhLTg0NTAtZDZmOTBjODg3ZDQ1XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_.jpg',
    },
  ];
  const bottomrow1 = [
    {
      name: 'telegram',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/185/185977.png',
      onIconPress:()=>{
        Linking.openURL('https://telegram.org/').catch((e)=>{
          console.log(e);
        });
      }
    },
    {
      name: 'youtube',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/185/185983.png',
      onIconPress:()=>{
        Linking.openURL('https://www.youtube.com/watch?v=FbUO6Zxs3Ps&ab_channel=CodeDiggers').catch((e)=>{
          console.log(e);
        });
      }
    },
    {
      name: 'qa',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1484/1484822.png',
      onIconPress:()=>{
        console.log('QA clicked')
      }
    },
    {
      name: 'information',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1028/1028917.png',
      onIconPress:()=>{
        console.log('Information Clicked')
      }
    },
  ];
  const bottomrow2 = [
    {
      name: 'share',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/469/469335.png',
      onIconPress:()=>{
        Share.share({
          message:'Your code is Abhi09071995'
        }).catch((e)=>{
          console.log(e)
        })
      }
    },
    {
      name: 'internet',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/457/457654.png',
      onIconPress:()=>{
        Linking.openURL('https://www.google.com').catch((e)=>{
          console.log(e);
        })
      }
    },
    {
      name: 'happyface',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051270.png',
      onIconPress:()=>{
        console.log('Happy Face Clicked')
      }
    },
    {
      name: 'history',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/4763/4763081.png',
      onIconPress:()=>{
        console.log('History Clicked')
      }
    },
  ];
  const bottomOptionList = [
    {name: 'Bollywood', navigationName: 'Bollywood'},
    {name: 'Hollywood', navigationName: 'Hollywood'},
    {name: 'Series', navigationName: 'Series'},
    {name: 'LiveTV', navigationName: 'Livetv'},
  ];
  export {posterData,bottomrow1,bottomrow2,bottomOptionList};