<template>
  <v-C-page>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">기간 설정</h4>
          </div>
          <div class="modal-body">
            <div class="tr-1">

              <div class="btn-group btn-group-justified" role="group" aria-label="...">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default">+1주일</button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default">+1개월</button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default">+3개월</button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default">+1년</button>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="input-group">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button">??</button>
                  </span>
                  <input type="text" class="form-control" placeholder="Search for...">
                </div><!-- /input-group -->
              </div><!-- /.col-lg-6 -->
              <h3>-</h3>
              <div class="col-lg-6">
                <div class="input-group">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button">??</button>
                  </span>
                  <input type="text" class="form-control" placeholder="Search for...">
                </div><!-- /input-group -->
              </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->

          </div>
          <div class="C-B-1">
            <button type="button" class="btn btn-primary btn-lg btn-block">조회</button>
            <button type="button" class="btn btn-default btn-lg btn-block">검색</button>
          </div>

        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->

  </v-C-page>
</template>

<style>
  .modal-header{
    margin: 0 auto;
  }
  .modal-body{
    margin: 0 auto;
  }
  .tr-1{
    margin-bottom: 20px;
  }
  .col-lg-6{
    width :160px;
    margin : 0 auto;
  }
  .C-B-1{
    margin : 15px;
  }


</style>
