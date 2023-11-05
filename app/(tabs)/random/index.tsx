import { View, Text, Button, ScrollView, StyleSheet, TextInput  } from 'react-native';
import React, { useEffect, useState } from 'react';

/** 각 mbti별 호감 */
const likes = {
    INTP: ['ENTJ', 'ESTJ'],
    INTJ: ['ENFP', 'ENTP'],
    INFP: ['ENFJ', 'ENTJ'],
    INFJ: ['ENFP', 'ENTP'],
    ISTP: ['ESFJ', 'ESTJ'],
    ISTJ: ['ESFP', 'ESTP'],
    ISFP: ['ENFJ', 'ESFJ', 'ESTJ'],
    ISFJ: ['ESFP', 'ESTP'],
    ENTP: ['INFJ', 'INTJ'],
    ENTJ: ['INFP', 'INTP'],
    ENFP: ['INFJ', 'INTJ'],
    ENFJ: ['INFP', 'ISFP'],
    ESTP: ['ISFJ', 'ISTJ'],
    ESTJ: ['INTP', 'ISFP', 'ISTP'],
    ESFP: ['ISFJ', 'ISTJ'],
    ESFJ: ['ISFP', 'ISTP'],
};

/** 각 mbti별 불호감 */
const dislikes = {
    INTP: [],
    INTJ: [],
    INFP: ['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
    INFJ: ['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
    ISTP: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
    ISTJ: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
    ISFP: ['INFP', 'ENFP'],
    ISFJ: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
    ENTP: [],
    ENTJ: [],
    ENFP: ['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
    ENFJ: ['ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
    ESTP: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
    ESTJ: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
    ESFP: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
    ESFJ: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
};

/** 입력된 mbti 유형에 대한 추천을 반환함 */
function recommendMBTI(inputType:string): string | null {
    if (likes[inputType]) {
        // 호감이 있는 MBTI 유형 중 랜덤하게 하나 선택하기
        const recommendedType = 
            likes[inputType][Math.floor(Math.random() * likes[inputType].length)];
        return recommendedType
    } else if (dislikes[inputType]) {
        // 불호가 있는 MBTI 유형 제외하고 호감이 있는 MBTI 유형 중 랜덤하게 하나 선택하기
        const filteredLikes = Object.keys(likes).filter((type) => !dislikes[inputType].includes(type));
        if (filteredLikes.length > 0) {
            const recommendedType = 
                filteredLikes[Math.floor(Math.random() * filteredLikes.length)];
                return recommendedType;
        }
    }
    return null; // 입력된 MBTI 유형에 대한 추천이 없을 경우 null 반환
}

// function recommendMBTI(inputType: string): string | null {
//     if (likes[inputType]) {
//       const recommendedType =
//         likes[inputType][Math.floor(Math.random() * likes[inputType].length)];
  
//       // 추천된 MBTI 유형에 해당하는 사용자 찾기
//       const recommendedUser = seedUsers.find(user => user.mbti === recommendedType);
//       if (recommendedUser) {
//         return recommendedUser.username;
//       }
//     } else if (dislikes[inputType]) {
//       const filteredLikes = Object.keys(likes).filter(
//         type => !dislikes[inputType].includes(type)
//       );
//       if (filteredLikes.length > 0) {
//         const recommendedType =
//           filteredLikes[Math.floor(Math.random() * filteredLikes.length)];
  
//         // 추천된 MBTI 유형에 해당하는 사용자 찾기
//         const recommendedUser = seedUsers.find(user => user.mbti === recommendedType);
//         if (recommendedUser) {
//           return recommendedUser.username;
//         }
//       }
//     }
//     return null;
// }  

export default function random() {
    const [userInput, setUserInput] = useState('');  //사용자가 입력하는 텍스트 값을 저장
	const [recommendedMBTIText, setRecommendedMBTIText] = useState(''); // 추천 받은 결과 메시지를 저장


    // useEffect(() => {
    //     fetch('http://localhost:3000/users') // 서버 주소에 맞게 변경해 주세요
    //     .then(response => response.json())
    //     .then(data => {
    //         setSeedUsers(data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching users', error);
    //     });
    // }, []);

    /** 텍스트 입력 변경 시 호출되며, 변경된 값을 상태로 설정 */
    const handleInputChange = (text) => {
        setUserInput(text.toUpperCase()); // 대문자로 변환하여 설정
    };

    const validMBTITypes = ['INTP', 'INTJ', 'INFP', 'INFJ', 'ISTP', 'ISTJ', 'ISFP', 'ISFJ', 'ENTP', 'ENTJ', 'ENFP', 'ENFJ', 'ESTP', 'ESTJ', 'ESFP', 'ESFJ']

    /** 버튼 클릭 시 호출되며, 입력된 값을 검증하고 추천 결과 메시지를 설정 */
    const handleFormSubmit = () => {
        const inputMBTI = userInput;

        if (!validMBTITypes.includes(inputMBTI)) {
            setRecommendedMBTIText('옳지 않은 MBTI 유형입니다.');
            return;
        }

        const recommendedMBTI = recommendMBTI(inputMBTI);
        setRecommendedMBTIText(recommendedMBTI);
    };

    // const handleFormSubmit = () => {
    //     const inputMBTI = userInput;
      
    //     if (!validMBTITypes.includes(inputMBTI)) {
    //       setRecommendedMBTIText('옳지 않은 MBTI 유형입니다.');
    //       return;
    //     }
      
    //     const recommendedMBTI = recommendMBTI(inputMBTI);
    //     if (recommendedMBTI) {
    //       setRecommendedMBTIText(`${recommendedMBTI}을(를) 추천합니다.`);
    //     } else {
    //       setRecommendedMBTIText('입력된 MBTI 유형에 대한 추천이 없습니다.');
    //     }
    //   };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MBTI 추천</Text>
            <TextInput
                style={styles.input}
                placeholder="MBTI 유형 입력"
                value={userInput}
                onChangeText={handleInputChange}
            />
            <Button title="추천 받기" onPress={handleFormSubmit} />
            {recommendedMBTIText && (
            <Text style={recommendedMBTIText ==='입력된 MBTI 유형에 대한 추천이 없습니다.' || recommendedMBTIText ==='옳지 않은 MBTI 유형입니다.' ? styles.norecommendation : styles.recommendation}>
                {recommendedMBTIText}
            </Text>
            )}

     </View>
    )
};

const styles = StyleSheet.create({
	container: {
	   flex: 1,
	   alignItems: 'center',
	   justifyContent: 'center',
	    paddingVertical: 20,
    },
	title:{
	    fontSize :24,
        fontWeight:'bold',
        marginBottom :20,
        textAlign:'center'
    },
	input:{
        width :'80%',
        height :40,
        borderWidth :1 ,
        borderColor :'gray',
        borderRadius :5 ,
        paddingHorizontal :10 ,
        marginBottom :20 
    },
	recommendation:{
        fontSize :18,
        marginTop :20 ,
        textAlign:'center'
    },
   norecommendation:{
        fontSize:18,
        marginTop:20,
        textAlign:'center',
        color:'red'
    }
});

function setSeedUsers(data: any) {
    throw new Error('Function not implemented.');
}
