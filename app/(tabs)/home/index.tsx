import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList, ActivityIndicator, Button  } from 'react-native';
import profile from "./../../assets/image/profile_image.jpg"

const HomePage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [Like, setLike] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (hasMore) {
            fetchMoreData();
        }
    }, [page]);

    const handleLikePress = () => {
        if (Like === 0) {
            setLike(1);
        } else {
            setLike(0);
        }
    };

    const deletePost = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/posts/${id}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete post');
            }
    
            // 성공적으로 게시물을 삭제한 후, 해당 게시물 제거
            setData((prevData) => prevData.filter((post) => post._id !== id));
        } catch (error) {
            console.error(error);
        }
    };
    

    const fetchMoreData = async () => {
        if (!loading) {
            setLoading(true);
            
            try {
                const response = await fetch(`http://192.168.68.51:3000/posts?page=${page}`);
                // const response = await fetch(`http://localhost:3000/posts?page=${page}`);

    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const json = await response.json();
                console.log(json)

                setData(prevData => [...prevData, ...json.posts]);

                if (json.currentPage < json.totalPages) {
                    setPage(prevPage => prevPage + 1);
                } else {
                    setHasMore(false);
                }
    
                // 응답 처리 후 상태 업데이트
                // setData(prevData => [...prevData, ...json]);
                
              } catch (error) { 
                  console.error('Failed to fetch data:', error);
              } finally {
                  // 로딩 상태 해제
                  setLoading(false); 
                //   setPage(prevPage => prevPage + 1);
              }
        }
    };

    return (
        <FlatList
            data = {data}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={fetchMoreData}  // 스크롤이 목록의 끝에 도달했을 때 호출되는 함수
            onEndReachedThreshold={0.5}
            renderItem={({ item }) =>
            <View>
                <View style={styles.cont}>
                    <Image source={profile} style={styles.ima} />
                    <Text style={styles.color} >ENFJ</Text>
                    <Button title="Delete" onPress={() => deletePost(item._id)} />
                </View>
                <View style={styles.cont2}>
                    {/* <Text style={styles.im}>{item.image}</Text> */}
                    <Image source={{uri: 'data:image/jpeg;base64,' + item.images[0]}} style={styles.im} />
                </View>
                <View style={styles.box}>
                    <Text onPress={handleLikePress}>{Like === 0 ? '🤍' : '❤️'}</Text>
                    {Like > 0 && (
                    <Text>{Like}</Text>
                    )}
                    <Text>{item.title}</Text>
                    <Text>{item.detail}</Text>
                </View>
            </View>
            }
            ListFooterComponent={() =>
                loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
            }
        />
    )
}

const styles = StyleSheet.create({
    color: {
        color: "blue",
    },
    conn: {
        textAlign:'left',
    },
    cont2: {
        alignItems: 'center',
    },
    cont: {
        borderWidth: 1,
        alignItems: 'center',
    },
    ima: {
        width: 40,
        height: 40,
        alignItems: 'center',
    },
    im: {
        width: 300,
        height: 300,
    },
    name: {
        fontWeight: 'bold',

    },
    box: {
        borderWidth: 1,
        width: '100%',
        height: 100,
    },
})

export default HomePage