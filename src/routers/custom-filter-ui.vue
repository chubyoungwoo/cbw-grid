<template>
  <div style="margin: 20px">
    <h3>사용자정의UI</h3>
    <br />
    <h4>사용자정의UI,기본필터 알고리즘 사용</h4>
    <BeeGridTable border height="560" :showSummary="false" :columns="columns" :data="data">
      <template slot-scope="{ column }" slot="hop">
        <Button type="primary" size="small" style="margin-right: 5px">새로고침</Button>
        <Button type="warning" size="small" @click="addPatient(column)">추가</Button>
      </template>
      <template slot-scope="{ row, index }" slot="op">
        <Button type="warning" size="small" style="margin-right: 5px">수정</Button>
        <Button type="error" size="small" @click="handleDelete(row, index)">삭제</Button>
      </template>
      <template slot-scope="{ row }" slot="sex">
        <i style="font-size: x-large" class="bee-sys-icon md-man" v-if="row.sex === 0"></i>
        <i style="font-size: x-large; color: red" class="bee-sys-icon md-woman" v-else></i>
      </template>
      <template slot-scope="{ column, doSortAndFilter }" slot="fsex">
        <RadioGroup
          v-model="column.selectedSexCode"
          @on-change="sexSelected(column, doSortAndFilter)"
        >
          <Radio label="-1">
            <i class="bee-sys-icon md-people"></i>
            <span>전체</span>
          </Radio>
          <Radio label="0">
            <i class="bee-sys-icon md-man"></i>
            <span>남성</span>
          </Radio>
          <Radio label="1">
            <i style="color: red" class="bee-sys-icon md-woman"></i>
            <span>여성</span>
          </Radio>
        </RadioGroup>
      </template>

      <template slot-scope="{ row }" slot="state">
        <Select v-model="row.state" style="width: 100px">
          <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </template>
      <template slot-scope="{ row }" slot="group">
        <Select v-model="row.groupCode" style="width: 100px">
          <Option v-for="item in groupList" :value="item.code" :key="item.name">{{ item.name }}</Option>
        </Select>
      </template>
    </BeeGridTable>

    <div v-highlight>
      <pre><code class="lang-html">  {{code}}</code></pre>
    </div>
    <div v-highlight>
      <pre><code class="lang-javascript">  {{codeJs}}</code></pre>
    </div>

    <br />
    <h4>사용자정의UI,선택 알고리즘 사용</h4>
    <BeeGridTable border height="560" :showSummary="false" :columns="columnsCustom" :data="data">
      <template slot-scope="{ column }" slot="hop">
        <Button type="primary" size="small" style="margin-right: 5px">새로고침</Button>
        <Button type="warning" size="small" @click="addPatient(column)">추가</Button>
      </template>
      <template slot-scope="{ row, index }" slot="op">
        <Button type="warning" size="small" style="margin-right: 5px">수정</Button>
        <Button type="error" size="small" @click="handleDelete(row, index)">삭제</Button>
      </template>
      <template slot-scope="{ row }" slot="sex">
        <i style="font-size: x-large" class="bee-sys-icon md-man" v-if="row.sex === 0"></i>
        <i style="font-size: x-large; color: red" class="bee-sys-icon md-woman" v-else></i>
      </template>
      <template slot-scope="{ column, doSortAndFilter }" slot="fsex">
        <RadioGroup
          v-model="column.selectedSexCode"
          @on-change="sexSelected(column, doSortAndFilter)"
        >
          <Radio label="-1">
            <i class="bee-sys-icon md-people"></i>
            <span>전체</span>
          </Radio>
          <Radio label="0">
            <i class="bee-sys-icon md-man"></i>
            <span>남성</span>
          </Radio>
          <Radio label="1">
            <i style="color: red" class="bee-sys-icon md-woman"></i>
            <span>여성</span>
          </Radio>
        </RadioGroup>
      </template>

      <template slot-scope="{ row }" slot="state">
        <Select v-model="row.state" style="width: 100px">
          <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </template>
      <template slot-scope="{ row }" slot="group">
        <Select v-model="row.groupCode" style="width: 100px">
          <Option v-for="item in groupList" :value="item.code" :key="item.name">{{ item.name }}</Option>
        </Select>
      </template>

      <template slot-scope="{ column, doSortAndFilter }" slot="hgroup">
        <Select
          transfer
          clearable
          v-model="column.selectedGroup"
          @on-change="filterGroupSelectChange(column, doSortAndFilter)"
          style="width: 100px"
        >
          <Option v-for="item in groupList" :value="item.code" :key="item.name">{{ item.name }}</Option>
        </Select>
      </template>
    </BeeGridTable>

    <div>
      <pre><code class="lang-html">  {{code1}}</code></pre>
    </div>
    <div>
      <pre><code class="lang-javascript">  {{codeJs1}}</code></pre>
    </div>
  </div>
</template>
<script>
import BeeGridTable from '../components/table/table.vue';
import Select from '../components/select/select.vue';
import Option from '../components/select/option.vue';
import Button from '../components/button/button.vue';
import RadioGroup from '../components/radio/radio-group.vue';
import Radio from '../components/radio/radio.vue';

export default {
    components: { BeeGridTable, Select, Option, Button, RadioGroup, Radio },
    data() {
        return {
            columns: [
                {
                    title: '코드',
                    key: 'code',
                    width: 150,
                    resizable: true
                },
                {
                    title: '성명',
                    key: 'name',
                    width: 150
                },
                {
                    title: '성별',
                    slot: 'sex',
                    key: 'sex',
                    width: 100,
                    selectedSexCode: -1,
                    headFilterSlot: 'fsex'
                },
                { title: '나이', key: 'age', width: 150, resizable: true },
                {
                    title: '그룹',
                    slot: 'group',
                    key: 'groupName',
                    resizable: true
                },
                {
                    title: '상태',
                    slot: 'state',
                    key: 'state',
                    width: 200
                },
                {
                    title: '관리',
                    slot: 'op',
                    key: 'op',
                    width: 150
                }
            ],
            columnsCustom: [
                {
                    title: '코드',
                    key: 'code',
                    width: 150,
                    resizable: true
                },
                {
                    title: '성명',
                    key: 'name',
                    width: 150
                },
                {
                    title: '성별',
                    slot: 'sex',
                    key: 'sex',
                    width: 100,
                    selectedSexCode: -1,
                    headFilterSlot: 'fsex'
                },
                { title: '나이', key: 'age', width: 150, resizable: true },
                {
                    title: '그룹',
                    slot: 'group',
                    headFilterSlot: 'hgroup',
                    key: 'groupName',
                    selectedGroup: null,
                    filterMethod(column, field, value, row) {
                        if (value === undefined || value === null) {
                            return true;
                        }

                        return value === row.groupCode;
                    },
                    resizable: true
                },
                {
                    title: '상태',
                    slot: 'state',
                    key: 'state',
                    width: 200
                },
                {
                    title: '관리',
                    slot: 'op',
                    hideFilter: true,
                    key: 'op',
                    width: 150
                }
            ],
            data: [],
            groupList: [
                {
                    code: 1,
                    name: '그룹1'
                },
                {
                    code: 2,
                    name: '그룹2'
                },
                {
                    code: 3,
                    name: '그룹3'
                }
            ],
            stateList: [
                {
                    value: 0,
                    label: '진행중'
                },
                {
                    value: 1,
                    label: '대기'
                },
                {
                    value: 2,
                    label: '접수'
                },
                {
                    value: 3,
                    label: '완료'
                }
            ],
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
      <template slot-scope="{ row }" slot="sex">
        <i
          style="font-size: x-large"
          class="bee-sys-icon md-man"
          v-if="row.sex === 0"
        ></i>
        <i
          style="font-size: x-large; color: red"
          class="bee-sys-icon md-woman"
          v-else
        ></i>
      </template>
      <template slot-scope="{ column, doSortAndFilter }" slot="fsex">
        <RadioGroup
          v-model="column.selectedSexCode"
          @on-change="sexSelected(column, doSortAndFilter)"
        >
          <Radio label="-1">
            <i class="bee-sys-icon md-people"></i>
            <span>전체</span>
          </Radio>
          <Radio label="0">
            <i class="bee-sys-icon md-man"></i>
            <span>남성</span>
          </Radio>
          <Radio label="1">
            <i style="color: red" class="bee-sys-icon md-woman"></i>
            <span>여성</span>
          </Radio>
        </RadioGroup>
      </template>

      <template slot-scope="{ row }" slot="state">
        <Select v-model="row.state" style="width: 100px">
          <Option
            v-for="item in stateList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </template>
      <template slot-scope="{ row }" slot="group">
        <Select v-model="row.groupCode" style="width: 100px">
          <Option
            v-for="item in groupList"
            :value="item.code"
            :key="item.name"
            >{{ item.name }}</Option
          >
        </Select>
      </template>
    </BeeGridTable>

      `,
            codeJs: `
    columns: [
        {
          title: "코드",
          key: "code",
          width: 150,
          resizable: true,
        },
        {
          title: "성명",
          key: "name",
          width: 150,
        },
        {
          title: "성별",
          slot: "sex",
          key: "sex",
          width: 100,
          selectedSexCode: -1,
          headFilterSlot: "fsex",
        },
        { title: "나이", key: "age", width: 150, resizable: true },
        {
          title: "그룹",
          slot: "group",
          key: "groupName",
          resizable: true,
        },
        {
          title: "상태",
          slot: "state",
          key: "state",
          width: 200,
        },
        {
          title: "관리",
          slot: "op",
          key: "op",
          width: 150,
        },
    ],
      
    ...
    methods: {
    sexSelected(column, doSortAndFilter) {
      column.filterValue =
        column.selectedSexCode === "-1" ? null : column.selectedSexCode;
      doSortAndFilter();
    },
  },
    
      `,
            code1: `
    <BeeGridTable
      border
      height="560"
      :showSummary="false"
      :columns="columnsCustom"
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
          >편집</Button
        >
        <Button type="error" size="small" @click="handleDelete(row, index)"
          >삭제</Button
        >
      </template>
      <template slot-scope="{ row }" slot="sex">
        <i
          style="font-size: x-large"
          class="bee-sys-icon md-man"
          v-if="row.sex === 0"
        ></i>
        <i
          style="font-size: x-large; color: red"
          class="bee-sys-icon md-woman"
          v-else
        ></i>
      </template>
      <template slot-scope="{ column, doSortAndFilter }" slot="fsex">
        <RadioGroup
          v-model="column.selectedSexCode"
          @on-change="sexSelected(column, doSortAndFilter)"
        >
          <Radio label="-1">
            <i class="bee-sys-icon md-people"></i>
            <span>전체</span>
          </Radio>
          <Radio label="0">
            <i class="bee-sys-icon md-man"></i>
            <span>남성</span>
          </Radio>
          <Radio label="1">
            <i style="color: red" class="bee-sys-icon md-woman"></i>
            <span>여성</span>
          </Radio>
        </RadioGroup>
      </template>

      <template slot-scope="{ row }" slot="state">
        <Select v-model="row.state" style="width: 100px">
          <Option
            v-for="item in stateList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </template>
      <template slot-scope="{ row }" slot="group">
        <Select v-model="row.groupCode" style="width: 100px">
          <Option
            v-for="item in groupList"
            :value="item.code"
            :key="item.name"
            >{{ item.name }}</Option
          >
        </Select>
      </template>

      <template slot-scope="{ column, doSortAndFilter }" slot="hgroup">
        <Select
          transfer
          clearable
          v-model="column.selectedGroup"
          @on-change="filterGroupSelectChange(column, doSortAndFilter)"
          style="width: 100px"
        >
          <Option
            v-for="item in groupList"
            :value="item.code"
            :key="item.name"
            >{{ item.name }}</Option
          >
        </Select>
      </template>
    </BeeGridTable>
  
      `,
            codeJs1: `
  columnsCustom: [
    {
        title: "코드",
        key: "code",
        width: 150,
        resizable: true,
    },
    {
        title: "성명",
        key: "name",
        width: 150,
    },
    {
        title: "성별",
        slot: "sex",
        key: "sex",
        width: 100,
        selectedSexCode: -1,
        headFilterSlot: "fsex",
    },
    { title: "나이", key: "age", width: 150, resizable: true },
    {
        title: "그룹",
        slot: "group",
        headFilterSlot: "hgroup",
        key: "groupName",
        selectedGroup: null,
        filterMethod(column, field, value, row) {
        if (value === undefined || value === null) {
            return true;
        }

        return value === row.groupCode;
        },
        resizable: true,
    },
    {
        title: "상태",
        slot: "state",
        key: "state",
        width: 200,
    },
    {
        title: "관리",
        slot: "op",
        hideFilter: true,
        key: "op",
        width: 150,
    },
    ],
        

  ...

  methods: {
    sexSelected(column, doSortAndFilter) {
      column.filterValue =
        column.selectedSexCode === "-1" ? null : column.selectedSexCode;
      doSortAndFilter();
    },
    filterGroupSelectChange(column, doSortAndFilter) {
      column.filterValue = column.selectedGroup;
      doSortAndFilter();
    },
  },  
    `
        };
    },
    methods: {
        sexSelected(column, doSortAndFilter) {
            column.filterValue =
                column.selectedSexCode === '-1' ? null : column.selectedSexCode;
            doSortAndFilter();
        },
        filterGroupSelectChange(column, doSortAndFilter) {
            column.filterValue = column.selectedGroup;
            doSortAndFilter();
        }
    },
    mounted() {
        setTimeout(() => {
            let tempData = [];
            for (var i = 1; i < 1001; i++) {
                tempData.push({
                    key: i,
                    code: `abc` + i,
                    name: 'John' + i,
                    birthDay: '',
                    age: (i % 65) + 5,
                    groupCode: (i % 3) + 1,
                    groupName: '그룹' + ((i % 3) + 1),
                    state: i % 4,
                    sex: i % 2
                });
            }
            this.data = tempData;
        }, 1000);
    }
};
</script>
