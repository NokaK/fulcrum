var GEL_INSTRUMENT_IDS = [15, 16, 18, 20, 21, 22, 25, 28, 30, 31];
var tradeInstruments = {};
var instrumentsStored = false;

$(function() {
  initSwiper();

  var ws = new WebSocket("wss://apifulcrumprod.alphapoint.com/WSGateway");
  ws.onopen = function() {
    ws.send(
      JSON.stringify({
        m: 0,
        i: 2,
        n: "GetInstruments",
        o: JSON.stringify({ OMSId: 1 })
      })
    );
  };

  ws.onmessage = function onWsMessage(ev) {
    var MESSAGE_TYPES = {
      request: 0,
      reply: 1,
      subscribeToEvent: 2,
      event: 3,
      unsibscribeFromEvent: 4,
      error: 5
    };

    var data = JSON.parse(ev.data || "{}");

    if (data.n === "GetInstruments" && data.m !== MESSAGE_TYPES.error) {
      handleGetInstrumentSuccess(JSON.parse(data.o));
    }

    if (data.n === "SubscribeLevel1" && data.m !== MESSAGE_TYPES.error) {
      updateInstrument(JSON.parse(data.o));
    }

    if (data.n === "Level1UpdateEvent" && data.m !== MESSAGE_TYPES.error) {
      updateInstrument(JSON.parse(data.o));
    }
  };

  function handleGetInstrumentSuccess(insts) {
    insts.forEach(function(inst) {
      if (GEL_INSTRUMENT_IDS.indexOf(inst.InstrumentId) > -1) {
        if (!instrumentsStored) {
          Object.assign(
            tradeInstruments,
            _defineProperty({}, inst.InstrumentId, inst)
          );
        }

        ws.send(
          JSON.stringify({
            m: 0,
            i: 2,
            n: "SubscribeLevel1",
            o: JSON.stringify({
              OMSId: inst.OMSId,
              InstrumentId: inst.InstrumentId
            })
          })
        );
      }
    });

    instrumentsStored = true;
  }
});

function updateInstrument(inst) {
  $(
    ".currency-block[data-instrumentid='" +
      inst.InstrumentId +
      "'] .best-bid .currency"
  )
    .text(inst.BestBid)
    .toggleClass("subscribed", true);

  $(
    ".currency-block[data-instrumentid='" +
      inst.InstrumentId +
      "'] .best-offer .currency"
  )
    .text(inst.BestOffer)
    .toggleClass("subscribed", true);
}

function initSwiper() {
  return new Swiper(".swiper-container", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next"
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    breakpointsInverse: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      1250: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      1550: {
        slidesPerView: 5,
        slidesPerGroup: 5
      }
    }
  });
}
