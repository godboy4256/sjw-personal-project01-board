import Head from 'next/head';
import React, { useEffect } from 'react';
import styled from '@emotion/styled'

declare const window: typeof globalThis & {
    kakao: any;
};

const ZoosContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 200px 0;
    flex-direction: column;
    align-items: center;
    background-color: currentcolor;
`

const ZoosTitle = styled.div`
    font-size: 40px;
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
`

const ZoosBox = styled.div`
    display: flex;
    
`

const ZoosPage = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=9263f0edb6dedfd7f8d69aa27fa25d82&autoload=false";
        if (window) {
            document.head.appendChild(script);
            script.onload = () => {
                window.kakao.maps.load(function () {
                    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

                    const mapContainer = document.getElementById('map'),
                        mapOption = {
                            center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
                            level: 3
                        };

                    const map = new window.kakao.maps.Map(mapContainer, mapOption);
                    const ps = new window.kakao.maps.services.Places();

                    function displayMarker(place) {
                        var marker = new window.kakao.maps.Marker({
                            map: map,
                            position: new window.kakao.maps.LatLng(place.y, place.x)
                        });
                        window.kakao.maps.event.addListener(marker, 'click', function () {
                            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                            infowindow.open(map, marker);
                        });
                    }


                    function placesSearchCB(data, status) {
                        if (status === window.kakao.maps.services.Status.OK) {
                            var bounds = new window.kakao.maps.LatLngBounds();

                            for (var i = 0; i < data.length; i++) {
                                displayMarker(data[i]);
                                bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
                            }

                            map.setBounds(bounds);
                        }
                    }

                    window && ps.keywordSearch('동물원', placesSearchCB);
                })
            }
        }
    }, [])

    return (
        <ZoosContainer>
            <Head>
                <script
                    type="text/javascript"
                    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=996eff304f2d2148f447d54a25b7dddc&libraries=services"
                ></script>
            </Head>
            <ZoosTitle>전국의 동물원 찾기</ZoosTitle>
            <ZoosBox id="map" style={{ width: 500, height: 400 }}></ZoosBox>
        </ZoosContainer>
    );
};

export default ZoosPage;