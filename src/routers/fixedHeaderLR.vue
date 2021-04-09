<template>
  <div style="margin: 20px">
    <h3>좌우고정</h3>

    <BeeGridTable border height="560" :showSummary="false" :columns="columns" :data="data">
      <template slot-scope="{ column }" slot="hop">
        <Button type="primary" size="small" style="margin-right: 5px">새로고침</Button>
        <Button type="warning" size="small" @click="addPatient(column)">추가</Button>
      </template>
      <template slot-scope="{ row, index }" slot="op">
        <Button type="warning" size="small" style="margin-right: 5px">수정</Button>
        <Button type="error" size="small" @click="handleDelete(row, index)">삭제</Button>
      </template>
    </BeeGridTable>
    <div>
      <pre><code class="lang-html">  {{code}}</code></pre>
    </div>
    <div>
      <pre><code class="lang-javascript">  {{codeJs}}</code></pre>
    </div>
  </div>
</template>
<script>
import BeeGridTable from '../components/table/table.vue';
import Button from '../components/button/button.vue';
export default {
    components: { BeeGridTable, Button },
    data() {
        return {
            columns: [
                {
                    title: '순번',
                    key: 'dialysisNumber',
                    fixed: 'left',
                    width: 150,
                    filterHeight: 50,
                    resizable: true
                },
                {
                    title: '성명',
                    fixed: 'left',
                    key: 'name',
                    width: 150,
                    filterHeight: 50,
                    resizable: true
                },
                { title: '성별', key: 'sexName', width: 150, resizable: true },
                {
                    title: '생년월일',
                    key: 'birthDay',
                    width: 150,
                    resizable: true
                },
                {
                    title: '그룹명',
                    key: 'doctorGroupName',
                    width: 150,
                    resizable: true
                },
                {
                    title: '상태명',
                    key: 'treatStatusName',
                    width: 150,
                    resizable: true
                },
                {
                    title: '진단',
                    key: 'diagnosis',
                    width: 150,
                    resizable: true
                },
                { title: '혈액', key: 'bloodRoad', resizable: true },
                {
                    title: '일정',
                    key: 'schedules',
                    width: 150,
                    resizable: true
                },
                {
                    title: '방문유형',
                    key: 'visitTypeName',
                    width: 150,
                    resizable: true
                },
                {
                    title: '진료',
                    key: 'termTypeName',
                    width: 150,
                    resizable: true
                },
                {
                    title: '첫번째일정',
                    key: 'firstTreatDate',
                    width: 150,
                    resizable: true
                },
                {
                    title: '휴대전화',
                    key: 'peopleCode',
                    width: 150,
                    resizable: true
                },
                {
                    title: '주민번호',
                    key: 'idNumber',
                    width: 150,
                    resizable: true
                },
                {
                    title: '주입',
                    slot: 'op',
                    headSlot: 'hop',
                    fixed: 'right',
                    canEdit: false,
                    key: 'op',
                    hideFilter: true,
                    resizable: true,
                    width: 150
                }
            ],
            data: [],
            code: `
    <BeeGridTable
      border
      height="560"
      :showSummary="false"
      :columns="columns"
      :data="data"
    >
      <template slot-scope="{ column }" slot="hop">
        <Button type="primary" size="small" style="margin-right: 5px"
          >새로고침</Button
        >
        <Button type="warning" size="small" @click="addPatient(column)"
          >추가</Button
        >
      </template>
      <template slot-scope="{ row, index }" slot="op">
        <Button type="warning" size="small" style="margin-right: 5px"
          >수정</Button
        >
        <Button type="error" size="small" @click="handleDelete(row, index)"
          >삭제</Button
        >
      </template>
    </BeeGridTable>
      `,
            codeJs: `
     columns: [
                {
                    title: '순번',
                    key: 'dialysisNumber',
                    fixed: 'left',
                    width: 150,
                    filterHeight: 50,
                    resizable: true
                },
                {
                    title: '성명',
                    fixed: 'left',
                    key: 'name',
                    width: 150,
                    filterHeight: 50,
                    resizable: true
                },
                { title: '성별', key: 'sexName', width: 150, resizable: true },
                {
                    title: '생년월일',
                    key: 'birthDay',
                    width: 150,
                    resizable: true
                },
                {
                    title: '그룹명',
                    key: 'doctorGroupName',
                    width: 150,
                    resizable: true
                },
                {
                    title: '상태명',
                    key: 'treatStatusName',
                    width: 150,
                    resizable: true
                },
                {
                    title: '진단',
                    key: 'diagnosis',
                    width: 150,
                    resizable: true
                },
                { title: '혈액', key: 'bloodRoad', resizable: true },
                {
                    title: '일정',
                    key: 'schedules',
                    width: 150,
                    resizable: true
                },
                {
                    title: '방문유형',
                    key: 'visitTypeName',
                    width: 150,
                    resizable: true
                },
                {
                    title: '진료',
                    key: 'termTypeName',
                    width: 150,
                    resizable: true
                },
                {
                    title: '첫번째일정',
                    key: 'firstTreatDate',
                    width: 150,
                    resizable: true
                },
                {
                    title: '휴대전화',
                    key: 'peopleCode',
                    width: 150,
                    resizable: true
                },
                {
                    title: '주민번호',
                    key: 'idNumber',
                    width: 150,
                    resizable: true
                },
                {
                    title: '주입',
                    slot: 'op',
                    headSlot: 'hop',
                    canEdit: false,
                    key: 'op',
                    hideFilter: true,
                    resizable: true,
                    width: 150
                }
            ],
      `
        };
    },
    methods: {},
    mounted() {
        setTimeout(() => {
            let tempData = [];
            for (var i = 1; i < 1001; i++) {
                tempData.push({
                    key: i,
                    name: 'John' + i,
                    age: i,
                    street: 'Lake Park',
                    building: 'dddf',
                    door: i % 21,
                    caddress: 'Lake Street 41',
                    cname: 'SoftLake Co',
                    gender: 'M'
                });
            }
            this.data = tempData;
        }, 1000);
    }
};
</script>
